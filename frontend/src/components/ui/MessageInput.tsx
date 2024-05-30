"use client";

import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import { IconButton, Stack } from '@mui/joy';

import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { AttachFileRounded, ImageRounded } from '@mui/icons-material';

export type MessageInputProps = {
  textAreaValue: string;
  userId : string;
  setTextAreaValue: (value: string) => void;
  onSubmit: () => void;
};

export default function MessageInput(props: MessageInputProps) {
  const { textAreaValue, setTextAreaValue, onSubmit } = props;
  const textAreaRef = React.useRef<HTMLDivElement>(null);
  const handleClick = async () => {
    if (textAreaValue.trim() !== '') {
      onSubmit();
      setTextAreaValue('');

      // await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/messages/sendMessage`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'session': `${localStorage.getItem('session')}`,
      //   },
      //   body: JSON.stringify({
      //     id: props.userId,
      //     message: textAreaValue,
      //   }),
      // });
    }
  };
  return (
    <Box sx={{ px: 2, pb: 3 }}>
      <FormControl>
        <Textarea
          placeholder="Введите сообщение..."
          aria-label="Message"
          ref={textAreaRef}
          onChange={(e) => {
            setTextAreaValue(e.target.value);
          }}
          value={textAreaValue}
          maxRows={15}
          endDecorator={
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexGrow={1}
              sx={{
                py: 1,
                pr: 1,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <div>
                <IconButton size="sm" variant="plain" color="neutral">
                  <AttachFileRounded />
                </IconButton>
                <IconButton size="sm" variant="plain" color="neutral">
                  <ImageRounded />
                </IconButton>
               
              </div>
              <Button
                size="sm"
                color="primary"
                sx={{ alignSelf: 'center', borderRadius: 'sm' }}
                endDecorator={<SendRoundedIcon />}
                onClick={handleClick}
              >
                Отправить
              </Button>
            </Stack>
          }
          onKeyDown={(event) => {
            if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
              handleClick();
            }
          }}
          sx={{
            '& textarea:first-of-type': {
              minHeight: 48,
            },
          }}
        />
      </FormControl>
    </Box>
  );
}
