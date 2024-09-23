import { ThemeProvider } from 'next-themes';
import { IBaseContainerProps } from '../interfaces';

export type IThemeContainer = IBaseContainerProps;

export function ThemeContainer(props: IThemeContainer) {
  return (
    <ThemeProvider
      enableSystem
      enableColorScheme
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange>
      {props.children}
    </ThemeProvider>
  );
}

export default ThemeContainer;
