import { Container } from '../Container/Container';

export const Footer = () => {
  return (
    <footer className="pt-2 pb-2">
      <Container>
        <div className="h-full flex items-center justify-center">
          <p className="text-xs text-gray-800 dark:text-gray-400">
            {new Date().getFullYear()} made by acoji.
          </p>
        </div>
      </Container>
    </footer>
  );
};
