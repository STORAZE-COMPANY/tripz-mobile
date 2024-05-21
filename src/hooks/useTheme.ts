import { useColorScheme } from 'react-native';
import lightTheme from '../theme/lightTheme';

const useTheme = () => {
  const colorScheme = useColorScheme();
  const theme = lightTheme;

  return { theme, colorScheme, lightTheme };
};

export default useTheme;
