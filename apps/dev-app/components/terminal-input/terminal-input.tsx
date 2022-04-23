import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../../styles/terminal-input.module.scss';

/* eslint-disable-next-line */
export interface TerminalInputProps {
  location?: string;
  input?: string;
}

export function TerminalInput(props: TerminalInputProps) {
  const { location, input } = props;

  const [inputValue, setInputValue] = useState(input);

  const inputChange = (event: ChangeEvent) => {
    setInputValue((event.target as HTMLTextAreaElement).value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form name="commandline" onSubmit={onSubmit}>
        <label htmlFor="command">{location} &#62; </label>
        <input
          type="text"
          className={styles.command}
          name="command"
          autoComplete="off"
          value={inputValue}
          onChange={inputChange}
        />
      </form>
    </div>
  );
}

export default TerminalInput;
