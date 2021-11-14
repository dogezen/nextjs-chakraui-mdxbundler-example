import { Box, useBoolean } from '@chakra-ui/react';
import theme from 'prism-react-renderer/themes/nightOwl'
import CodeContainer from './code-container';
import CopyButton from './copy-button';
import Highlight from './highlight';
import { InlineCode } from '../inline-code';

function CodeBlock(props) {
  const {
    className,
    children,
    viewlines,
    ln,
    mountStylesheet = false,
    ...rest
  } = props;
  const language = className?.replace(/language-/, '');

  if(!language) {
    return (
      <InlineCode >
        {children}
      </InlineCode>
    )
  }

  return (
    <Box position='relative' zIndex='0'>
      <CodeContainer px='0' overflow='hidden'>
        <Highlight
          codeString={children}
          language={language}
          theme={theme}
          metastring={ln}
          showLines={viewlines}
        />
      </CodeContainer>
      <CopyButton top='4' code={children} />
    </Box>
  );
}

export default CodeBlock