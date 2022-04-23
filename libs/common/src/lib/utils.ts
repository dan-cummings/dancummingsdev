export function utils(): string {
  return 'utils';
}

export const randomPause = (maximum: number): number => {
  return Math.floor(Math.random() * maximum);
};
