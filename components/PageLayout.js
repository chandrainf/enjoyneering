
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import { useTheme } from 'providers/ThemeProvider';

export default function PageLayout({children, className}) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme.type}>
      <Container>
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div className={`page-wrapper ${className}`}>
          {children}
        </div>
        <footer className="page-footer">
          <div>
            <a href="https://linkedin.com/in/chandra-pratama-putra">linkedin</a>{' | '}
            <a href="https://github.com/chandrainf">github</a>{' | '}
            <a href="https://codepen.io/chandrainf">codepen</a>
          </div>
        </footer>
      </Container>
      <style jsx global>{`
        html, body {
          background: ${theme.background};
          color: ${theme.fontColor};
          transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
        }
      `}
      </style>
    </div>
  )
}
