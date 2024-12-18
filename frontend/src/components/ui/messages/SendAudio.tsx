import { socket } from "@/socket";
import { IconButton } from "@mui/joy";
import React from "react";
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';
import getBlobDuration from 'get-blob-duration'
import { fetchAccess } from '@/utils/access';

const AudioRecorder = (props: any) => {
  const [access, setAccess] = React.useState<boolean | null>(null);
  const [isRecording, setIsRecording] = React.useState<boolean>(false);
  const [stream, setStream] = React.useState<MediaStream | null>(null);
  const [voiceRecorder, setVoiceRecorder] =
    React.useState<MediaRecorder | null>(null);

  const [content, setContent] = React.useState<Blob | null>(null);

  const onAudioClick = async () => {
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const mediaRecorder = new MediaRecorder(audioStream);

      setStream(audioStream);
      setVoiceRecorder(mediaRecorder);
      setIsRecording(true);
    } catch (e) {
      console.log("User didn't allowed us to access the microphone.");
    }
  };

  const onStopRecording = () => {
    if (!isRecording || !stream || !voiceRecorder) return;

    const tracks = stream.getAudioTracks();

    for (const track of tracks) {
      track.stop();
    }

    voiceRecorder.stop();

    setVoiceRecorder(null);
    setIsRecording(false);
  };

  React.useEffect(() => {
    fetchAccess('can_send_audio', setAccess);
  }, []);

  /**
   * This hook is triggered when we start the recording
   */
  React.useEffect(() => {
    if (!isRecording || !voiceRecorder) return;

    voiceRecorder.start();

    voiceRecorder.ondataavailable = ({ data }) => setContent(data);
  }, [isRecording, voiceRecorder]);

  /**
   * This hook will call our callback after finishing the record
   */
  React.useEffect(() => {
    if (isRecording || !content || !stream) return;


    getBlobDuration(content).then((duration) => {
      const payload = {
        userId: props.userId,  // Your user ID or other necessary data
        blob: content,  // The audio blob
        caption: props.caption,
        duration: duration,

      };
      socket.emit('sendAudio', payload);
      props.setTextAreaValue('');
    });



    setStream(null);
    setContent(null);
  }, [isRecording, content]);

  return (
    access ? (
      <IconButton onClick={!isRecording ? onAudioClick : onStopRecording} >
        {!isRecording ? <MicRoundedIcon /> : <StopCircleRoundedIcon />}
      </IconButton>
    ) :
      <></>
  );
};

export default AudioRecorder;


