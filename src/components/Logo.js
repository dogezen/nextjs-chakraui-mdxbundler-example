import { chakra, useColorModeValue, useToken } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props) => {
  const [white, black] = useToken('colors', ['white', 'gray.800'])
  // https://danmarshall.github.io/google-font-to-svg-path/
  // Ubuntu, weight 500, font 20
  return (
    <chakra.svg
      color={useColorModeValue('blue.500', 'blue.300')}
      aria-hidden
      viewBox="0 0 300 24"
      fill="none"
      h="6"
      flexShrink={0}
      {...props}
    >
      
      <path
        d="M 9.38 15.52 L 0 15.52 L 0 1.66 L 8.9 1.66 L 8.9 3.8 L 2.52 3.8 L 2.52 7.22 L 8.2 7.22 L 8.2 9.32 L 2.52 9.32 L 2.52 13.38 L 9.38 13.38 L 9.38 15.52 Z M 13.3 5.06 L 15.52 8.48 L 17.74 5.06 L 20.28 5.06 L 16.84 10 Q 17.92 11.4 18.91 12.83 Q 19.9 14.26 20.54 15.52 L 17.92 15.52 Q 17.74 15.14 17.45 14.65 Q 17.16 14.16 16.83 13.63 Q 16.5 13.1 16.14 12.58 Q 15.78 12.06 15.44 11.6 A 20.648 20.648 0 0 0 14.577 12.799 A 24.547 24.547 0 0 0 14.07 13.59 Q 13.557 14.425 13.179 15.113 A 23.088 23.088 0 0 0 12.96 15.52 L 10.48 15.52 Q 10.78 14.92 11.2 14.24 A 39.207 39.207 0 0 1 11.864 13.203 A 43.508 43.508 0 0 1 12.1 12.85 Q 12.58 12.14 13.09 11.43 Q 13.6 10.72 14.1 10.08 L 10.64 5.06 L 13.3 5.06 Z M 195.74 5.4 L 195.74 14.46 Q 195.74 16.049 195.227 17.096 A 3.385 3.385 0 0 1 194.47 18.12 Q 193.2 19.28 190.58 19.28 Q 189.62 19.28 188.71 19.12 A 11.639 11.639 0 0 1 187.746 18.91 A 9.097 9.097 0 0 1 187.06 18.7 L 187.5 16.64 A 6.641 6.641 0 0 0 188.24 16.898 A 8.729 8.729 0 0 0 188.91 17.06 Q 189.7 17.22 190.62 17.22 A 5.624 5.624 0 0 0 191.336 17.178 Q 192.138 17.074 192.587 16.719 A 1.514 1.514 0 0 0 192.7 16.62 A 1.896 1.896 0 0 0 193.184 15.819 Q 193.32 15.393 193.32 14.84 L 193.32 14.44 A 4.105 4.105 0 0 1 193.032 14.569 Q 192.89 14.627 192.724 14.685 A 9.502 9.502 0 0 1 192.37 14.8 A 3.994 3.994 0 0 1 191.698 14.94 A 5.487 5.487 0 0 1 191.02 14.98 A 5.444 5.444 0 0 1 189.892 14.867 A 4.584 4.584 0 0 1 189.19 14.66 Q 188.36 14.34 187.77 13.72 A 4.002 4.002 0 0 1 187.095 12.747 A 5.064 5.064 0 0 1 186.85 12.17 Q 186.521 11.242 186.52 10.024 A 8.312 8.312 0 0 1 186.52 10.02 A 6.493 6.493 0 0 1 186.657 8.665 A 5.542 5.542 0 0 1 186.87 7.92 Q 187.22 6.96 187.89 6.28 A 4.585 4.585 0 0 1 189.277 5.323 A 5.37 5.37 0 0 1 189.52 5.22 Q 190.48 4.84 191.7 4.84 Q 192.88 4.84 193.94 5.02 A 26.657 26.657 0 0 1 194.69 5.158 Q 195.057 5.231 195.376 5.307 A 13.098 13.098 0 0 1 195.74 5.4 Z M 70.68 15.52 L 70.68 5.4 A 10.307 10.307 0 0 1 71.211 5.265 Q 71.488 5.201 71.81 5.14 A 24.765 24.765 0 0 1 72.5 5.02 A 13.865 13.865 0 0 1 73.797 4.877 A 18.207 18.207 0 0 1 74.98 4.84 A 7.772 7.772 0 0 1 75.881 4.889 Q 76.583 4.971 77.12 5.19 Q 77.98 5.54 78.49 6.17 A 3.56 3.56 0 0 1 79.077 7.236 A 4.405 4.405 0 0 1 79.21 7.69 A 7.798 7.798 0 0 1 79.389 8.853 A 9.769 9.769 0 0 1 79.42 9.64 L 79.42 15.52 L 77 15.52 L 77 10.02 Q 77 9.18 76.89 8.59 Q 76.78 8 76.53 7.63 Q 76.28 7.26 75.85 7.09 A 2.249 2.249 0 0 0 75.421 6.971 Q 75.211 6.933 74.969 6.923 A 4.242 4.242 0 0 0 74.8 6.92 A 7.794 7.794 0 0 0 74.088 6.954 A 8.937 8.937 0 0 0 73.84 6.98 A 37.268 37.268 0 0 0 73.606 7.009 Q 73.28 7.05 73.1 7.08 L 73.1 15.52 L 70.68 15.52 Z M 158.18 15.52 L 158.18 5.4 A 10.307 10.307 0 0 1 158.711 5.265 Q 158.988 5.201 159.31 5.14 A 24.765 24.765 0 0 1 160 5.02 A 13.865 13.865 0 0 1 161.297 4.877 A 18.207 18.207 0 0 1 162.48 4.84 A 7.772 7.772 0 0 1 163.381 4.889 Q 164.083 4.971 164.62 5.19 Q 165.48 5.54 165.99 6.17 A 3.56 3.56 0 0 1 166.577 7.236 A 4.405 4.405 0 0 1 166.71 7.69 A 7.798 7.798 0 0 1 166.889 8.853 A 9.769 9.769 0 0 1 166.92 9.64 L 166.92 15.52 L 164.5 15.52 L 164.5 10.02 Q 164.5 9.18 164.39 8.59 Q 164.28 8 164.03 7.63 Q 163.78 7.26 163.35 7.09 A 2.249 2.249 0 0 0 162.921 6.971 Q 162.711 6.933 162.469 6.923 A 4.242 4.242 0 0 0 162.3 6.92 A 7.794 7.794 0 0 0 161.588 6.954 A 8.937 8.937 0 0 0 161.34 6.98 A 37.268 37.268 0 0 0 161.106 7.009 Q 160.78 7.05 160.6 7.08 L 160.6 15.52 L 158.18 15.52 Z M 175.4 15.52 L 175.4 5.4 A 10.307 10.307 0 0 1 175.931 5.265 Q 176.208 5.201 176.53 5.14 A 24.765 24.765 0 0 1 177.22 5.02 A 13.865 13.865 0 0 1 178.517 4.877 A 18.207 18.207 0 0 1 179.7 4.84 A 7.772 7.772 0 0 1 180.601 4.889 Q 181.303 4.971 181.84 5.19 Q 182.7 5.54 183.21 6.17 A 3.56 3.56 0 0 1 183.797 7.236 A 4.405 4.405 0 0 1 183.93 7.69 A 7.798 7.798 0 0 1 184.109 8.853 A 9.769 9.769 0 0 1 184.14 9.64 L 184.14 15.52 L 181.72 15.52 L 181.72 10.02 Q 181.72 9.18 181.61 8.59 Q 181.5 8 181.25 7.63 Q 181 7.26 180.57 7.09 A 2.249 2.249 0 0 0 180.141 6.971 Q 179.931 6.933 179.689 6.923 A 4.242 4.242 0 0 0 179.52 6.92 A 7.794 7.794 0 0 0 178.808 6.954 A 8.937 8.937 0 0 0 178.56 6.98 A 37.268 37.268 0 0 0 178.326 7.009 Q 178 7.05 177.82 7.08 L 177.82 15.52 L 175.4 15.52 Z M 43.08 11.04 L 36.18 11.04 A 3.526 3.526 0 0 0 36.349 11.897 A 2.48 2.48 0 0 0 37.07 12.99 A 2.544 2.544 0 0 0 37.967 13.485 Q 38.349 13.61 38.813 13.655 A 5.695 5.695 0 0 0 39.36 13.68 A 8.425 8.425 0 0 0 40.278 13.632 A 6.587 6.587 0 0 0 40.97 13.52 A 10.712 10.712 0 0 0 41.396 13.418 Q 41.802 13.311 42.081 13.196 A 3.099 3.099 0 0 0 42.12 13.18 L 42.44 15.16 A 2.271 2.271 0 0 1 42.3 15.223 Q 42.142 15.29 41.922 15.36 A 7.395 7.395 0 0 1 41.89 15.37 A 6.522 6.522 0 0 1 41.527 15.472 Q 41.322 15.524 41.09 15.57 A 11.078 11.078 0 0 1 40.5 15.671 A 13.485 13.485 0 0 1 40.12 15.72 Q 39.6 15.78 39.06 15.78 A 7.848 7.848 0 0 1 37.921 15.702 Q 37.298 15.61 36.769 15.412 A 4.759 4.759 0 0 1 36.66 15.37 A 4.828 4.828 0 0 1 35.601 14.789 A 4.107 4.107 0 0 1 34.98 14.23 A 4.657 4.657 0 0 1 34.02 12.572 A 5.332 5.332 0 0 1 34 12.51 A 6.617 6.617 0 0 1 33.711 11.059 A 8.088 8.088 0 0 1 33.68 10.34 A 7.863 7.863 0 0 1 33.767 9.14 A 5.684 5.684 0 0 1 34.09 7.92 A 5.665 5.665 0 0 1 34.602 6.914 A 4.559 4.559 0 0 1 35.18 6.19 Q 35.86 5.5 36.74 5.15 Q 37.62 4.8 38.54 4.8 Q 40.7 4.8 41.91 6.14 A 4.217 4.217 0 0 1 42.758 7.625 Q 42.973 8.255 43.06 9.023 A 9.908 9.908 0 0 1 43.12 10.14 Q 43.12 10.334 43.111 10.574 A 15.488 15.488 0 0 1 43.11 10.59 A 8.984 8.984 0 0 1 43.098 10.824 Q 43.09 10.938 43.08 11.04 Z M 68.08 11.04 L 61.18 11.04 A 3.526 3.526 0 0 0 61.349 11.897 A 2.48 2.48 0 0 0 62.07 12.99 A 2.544 2.544 0 0 0 62.967 13.485 Q 63.349 13.61 63.813 13.655 A 5.695 5.695 0 0 0 64.36 13.68 A 8.425 8.425 0 0 0 65.278 13.632 A 6.587 6.587 0 0 0 65.97 13.52 A 10.712 10.712 0 0 0 66.396 13.418 Q 66.802 13.311 67.081 13.196 A 3.099 3.099 0 0 0 67.12 13.18 L 67.44 15.16 A 2.271 2.271 0 0 1 67.3 15.223 Q 67.142 15.29 66.922 15.36 A 7.395 7.395 0 0 1 66.89 15.37 A 6.522 6.522 0 0 1 66.527 15.472 Q 66.322 15.524 66.09 15.57 A 11.078 11.078 0 0 1 65.5 15.671 A 13.485 13.485 0 0 1 65.12 15.72 Q 64.6 15.78 64.06 15.78 A 7.848 7.848 0 0 1 62.921 15.702 Q 62.298 15.61 61.769 15.412 A 4.759 4.759 0 0 1 61.66 15.37 A 4.828 4.828 0 0 1 60.601 14.789 A 4.107 4.107 0 0 1 59.98 14.23 A 4.657 4.657 0 0 1 59.02 12.572 A 5.332 5.332 0 0 1 59 12.51 A 6.617 6.617 0 0 1 58.711 11.059 A 8.088 8.088 0 0 1 58.68 10.34 A 7.863 7.863 0 0 1 58.767 9.14 A 5.684 5.684 0 0 1 59.09 7.92 A 5.665 5.665 0 0 1 59.602 6.914 A 4.559 4.559 0 0 1 60.18 6.19 Q 60.86 5.5 61.74 5.15 Q 62.62 4.8 63.54 4.8 Q 65.7 4.8 66.91 6.14 A 4.217 4.217 0 0 1 67.758 7.625 Q 67.973 8.255 68.06 9.023 A 9.908 9.908 0 0 1 68.12 10.14 Q 68.12 10.334 68.111 10.574 A 15.488 15.488 0 0 1 68.11 10.59 A 8.984 8.984 0 0 1 68.098 10.824 Q 68.09 10.938 68.08 11.04 Z M 136.84 11.04 L 129.94 11.04 A 3.526 3.526 0 0 0 130.109 11.897 A 2.48 2.48 0 0 0 130.83 12.99 A 2.544 2.544 0 0 0 131.727 13.485 Q 132.109 13.61 132.573 13.655 A 5.695 5.695 0 0 0 133.12 13.68 A 8.425 8.425 0 0 0 134.038 13.632 A 6.587 6.587 0 0 0 134.73 13.52 A 10.712 10.712 0 0 0 135.156 13.418 Q 135.562 13.311 135.841 13.196 A 3.099 3.099 0 0 0 135.88 13.18 L 136.2 15.16 A 2.271 2.271 0 0 1 136.06 15.223 Q 135.902 15.29 135.682 15.36 A 7.395 7.395 0 0 1 135.65 15.37 A 6.522 6.522 0 0 1 135.287 15.472 Q 135.082 15.524 134.85 15.57 A 11.078 11.078 0 0 1 134.26 15.671 A 13.485 13.485 0 0 1 133.88 15.72 Q 133.36 15.78 132.82 15.78 A 7.848 7.848 0 0 1 131.681 15.702 Q 131.058 15.61 130.529 15.412 A 4.759 4.759 0 0 1 130.42 15.37 A 4.828 4.828 0 0 1 129.361 14.789 A 4.107 4.107 0 0 1 128.74 14.23 A 4.657 4.657 0 0 1 127.78 12.572 A 5.332 5.332 0 0 1 127.76 12.51 A 6.617 6.617 0 0 1 127.471 11.059 A 8.088 8.088 0 0 1 127.44 10.34 A 7.863 7.863 0 0 1 127.527 9.14 A 5.684 5.684 0 0 1 127.85 7.92 A 5.665 5.665 0 0 1 128.362 6.914 A 4.559 4.559 0 0 1 128.94 6.19 Q 129.62 5.5 130.5 5.15 Q 131.38 4.8 132.3 4.8 Q 134.46 4.8 135.67 6.14 A 4.217 4.217 0 0 1 136.518 7.625 Q 136.733 8.255 136.82 9.023 A 9.908 9.908 0 0 1 136.88 10.14 Q 136.88 10.334 136.871 10.574 A 15.488 15.488 0 0 1 136.87 10.59 A 8.984 8.984 0 0 1 136.858 10.824 Q 136.85 10.938 136.84 11.04 Z M 82.26 11.36 L 82.26 2.3 L 84.68 1.9 L 84.68 5.06 L 88.4 5.06 L 88.4 7.08 L 84.68 7.08 L 84.68 11.34 A 6.278 6.278 0 0 0 84.708 11.959 Q 84.786 12.743 85.08 13.14 A 1.224 1.224 0 0 0 85.663 13.561 Q 85.876 13.639 86.142 13.666 A 2.96 2.96 0 0 0 86.44 13.68 A 5.303 5.303 0 0 0 87.026 13.649 Q 87.319 13.617 87.576 13.549 A 3.234 3.234 0 0 0 87.61 13.54 A 12.731 12.731 0 0 0 87.908 13.454 Q 88.193 13.369 88.392 13.291 A 3.665 3.665 0 0 0 88.42 13.28 L 88.82 15.2 Q 88.538 15.321 88.138 15.446 A 13.769 13.769 0 0 1 87.72 15.57 Q 87.136 15.733 86.374 15.756 A 8.431 8.431 0 0 1 86.12 15.76 A 6.931 6.931 0 0 1 85.332 15.718 Q 84.719 15.647 84.25 15.46 A 3.032 3.032 0 0 1 83.541 15.065 A 2.546 2.546 0 0 1 83.06 14.59 A 3.217 3.217 0 0 1 82.582 13.704 A 4.08 4.08 0 0 1 82.44 13.21 Q 82.266 12.425 82.26 11.425 A 11.89 11.89 0 0 1 82.26 11.36 Z M 120.18 13.34 L 126.42 13.34 L 126.42 15.52 L 117.66 15.52 L 117.66 1.66 L 120.18 1.66 L 120.18 13.34 Z M 24.76 15.16 L 24.76 19.22 L 22.34 19.22 L 22.34 5.4 A 13.663 13.663 0 0 1 22.943 5.253 Q 23.214 5.193 23.518 5.134 A 27.396 27.396 0 0 1 24.16 5.02 A 13.391 13.391 0 0 1 25.848 4.851 A 15.417 15.417 0 0 1 26.44 4.84 Q 27.68 4.84 28.66 5.22 Q 29.64 5.6 30.33 6.31 A 4.698 4.698 0 0 1 31.267 7.722 A 5.529 5.529 0 0 1 31.39 8.03 A 5.999 5.999 0 0 1 31.707 9.381 A 7.693 7.693 0 0 1 31.76 10.3 A 8.095 8.095 0 0 1 31.656 11.621 A 6.602 6.602 0 0 1 31.45 12.5 A 5.578 5.578 0 0 1 31.001 13.563 A 4.639 4.639 0 0 1 30.56 14.22 Q 29.98 14.94 29.11 15.34 A 4.363 4.363 0 0 1 27.809 15.7 A 5.505 5.505 0 0 1 27.14 15.74 A 5.308 5.308 0 0 1 26.314 15.678 A 4.329 4.329 0 0 1 25.78 15.56 A 6.988 6.988 0 0 1 25.346 15.419 Q 25.136 15.343 24.96 15.261 A 3.372 3.372 0 0 1 24.76 15.16 Z M 103.98 8.94 L 103.98 15.28 Q 103.551 15.372 102.788 15.493 A 61.583 61.583 0 0 1 102.29 15.57 Q 101.178 15.737 99.784 15.74 A 23.554 23.554 0 0 1 99.74 15.74 A 8.534 8.534 0 0 1 98.746 15.685 A 6.702 6.702 0 0 1 98.02 15.56 Q 97.24 15.38 96.69 14.98 Q 96.14 14.58 95.83 13.94 A 2.891 2.891 0 0 1 95.607 13.274 Q 95.542 12.963 95.525 12.604 A 5.35 5.35 0 0 1 95.52 12.36 A 3.85 3.85 0 0 1 95.578 11.675 Q 95.651 11.27 95.817 10.94 A 2.321 2.321 0 0 1 95.87 10.84 Q 96.22 10.22 96.82 9.83 A 3.897 3.897 0 0 1 97.769 9.387 A 4.765 4.765 0 0 1 98.21 9.27 A 7.771 7.771 0 0 1 99.739 9.101 A 8.628 8.628 0 0 1 99.86 9.1 A 7.136 7.136 0 0 1 100.456 9.126 A 8.316 8.316 0 0 1 100.7 9.15 A 7.151 7.151 0 0 1 101.244 9.234 A 8.946 8.946 0 0 1 101.64 9.32 L 101.64 8.92 A 3.174 3.174 0 0 0 101.566 8.228 A 2.911 2.911 0 0 0 101.54 8.12 Q 101.44 7.74 101.19 7.45 A 1.531 1.531 0 0 0 100.771 7.113 A 1.949 1.949 0 0 0 100.53 7 A 2.099 2.099 0 0 0 100.162 6.896 Q 99.978 6.861 99.766 6.848 A 4.287 4.287 0 0 0 99.5 6.84 A 10.249 10.249 0 0 0 98.623 6.876 A 7.962 7.962 0 0 0 97.96 6.96 Q 97.26 7.08 96.82 7.24 L 96.52 5.28 Q 96.98 5.12 97.86 4.96 Q 98.74 4.8 99.74 4.8 A 8.018 8.018 0 0 1 100.587 4.842 Q 101.248 4.913 101.76 5.1 A 3.796 3.796 0 0 1 102.446 5.428 A 2.855 2.855 0 0 1 103.07 5.94 A 3.069 3.069 0 0 1 103.694 7.004 A 3.687 3.687 0 0 1 103.77 7.25 A 5.918 5.918 0 0 1 103.95 8.271 A 7.368 7.368 0 0 1 103.98 8.94 Z M 147.16 8.94 L 147.16 15.28 Q 146.731 15.372 145.968 15.493 A 61.583 61.583 0 0 1 145.47 15.57 Q 144.358 15.737 142.964 15.74 A 23.554 23.554 0 0 1 142.92 15.74 A 8.534 8.534 0 0 1 141.926 15.685 A 6.702 6.702 0 0 1 141.2 15.56 Q 140.42 15.38 139.87 14.98 Q 139.32 14.58 139.01 13.94 A 2.891 2.891 0 0 1 138.787 13.274 Q 138.722 12.963 138.705 12.604 A 5.35 5.35 0 0 1 138.7 12.36 A 3.85 3.85 0 0 1 138.758 11.675 Q 138.831 11.27 138.997 10.94 A 2.321 2.321 0 0 1 139.05 10.84 Q 139.4 10.22 140 9.83 A 3.897 3.897 0 0 1 140.949 9.387 A 4.765 4.765 0 0 1 141.39 9.27 A 7.771 7.771 0 0 1 142.919 9.101 A 8.628 8.628 0 0 1 143.04 9.1 A 7.136 7.136 0 0 1 143.636 9.126 A 8.316 8.316 0 0 1 143.88 9.15 A 7.151 7.151 0 0 1 144.424 9.234 A 8.946 8.946 0 0 1 144.82 9.32 L 144.82 8.92 A 3.174 3.174 0 0 0 144.746 8.228 A 2.911 2.911 0 0 0 144.72 8.12 Q 144.62 7.74 144.37 7.45 A 1.531 1.531 0 0 0 143.951 7.113 A 1.949 1.949 0 0 0 143.71 7 A 2.099 2.099 0 0 0 143.342 6.896 Q 143.158 6.861 142.946 6.848 A 4.287 4.287 0 0 0 142.68 6.84 A 10.249 10.249 0 0 0 141.803 6.876 A 7.962 7.962 0 0 0 141.14 6.96 Q 140.44 7.08 140 7.24 L 139.7 5.28 Q 140.16 5.12 141.04 4.96 Q 141.92 4.8 142.92 4.8 A 8.018 8.018 0 0 1 143.767 4.842 Q 144.428 4.913 144.94 5.1 A 3.796 3.796 0 0 1 145.626 5.428 A 2.855 2.855 0 0 1 146.25 5.94 A 3.069 3.069 0 0 1 146.874 7.004 A 3.687 3.687 0 0 1 146.95 7.25 A 5.918 5.918 0 0 1 147.13 8.271 A 7.368 7.368 0 0 1 147.16 8.94 Z M 110.92 13.72 L 110.58 15.72 Q 109.5 15.7 108.79 15.48 Q 108.08 15.26 107.66 14.85 Q 107.24 14.44 107.07 13.83 Q 106.903 13.23 106.9 12.464 A 7.105 7.105 0 0 1 106.9 12.44 L 106.9 0.4 L 109.32 0 L 109.32 11.98 A 4.603 4.603 0 0 0 109.33 12.29 Q 109.34 12.441 109.361 12.57 A 2.178 2.178 0 0 0 109.39 12.72 A 1.28 1.28 0 0 0 109.504 13.029 A 1.092 1.092 0 0 0 109.64 13.23 Q 109.82 13.44 110.13 13.55 A 2.645 2.645 0 0 0 110.386 13.625 Q 110.525 13.659 110.687 13.686 A 5.809 5.809 0 0 0 110.92 13.72 Z M 52.06 5.2 L 51.64 7.24 A 4.313 4.313 0 0 0 51.43 7.177 Q 51.21 7.116 50.91 7.051 A 14.916 14.916 0 0 0 50.81 7.03 Q 50.355 6.935 49.774 6.922 A 8.462 8.462 0 0 0 49.58 6.92 A 4.514 4.514 0 0 0 49.06 6.951 A 5.522 5.522 0 0 0 48.73 7 Q 48.28 7.08 48.1 7.14 L 48.1 15.52 L 45.68 15.52 L 45.68 5.56 A 9.366 9.366 0 0 1 46.254 5.369 Q 46.774 5.214 47.43 5.07 A 9.726 9.726 0 0 1 48.684 4.884 A 12.665 12.665 0 0 1 49.76 4.84 A 4.606 4.606 0 0 1 49.951 4.844 Q 50.057 4.849 50.174 4.858 A 8.414 8.414 0 0 1 50.32 4.87 Q 50.64 4.9 50.96 4.95 Q 51.28 5 51.58 5.07 Q 51.88 5.14 52.06 5.2 Z M 156.5 5.2 L 156.08 7.24 A 4.313 4.313 0 0 0 155.87 7.177 Q 155.65 7.116 155.35 7.051 A 14.916 14.916 0 0 0 155.25 7.03 Q 154.795 6.935 154.214 6.922 A 8.462 8.462 0 0 0 154.02 6.92 A 4.514 4.514 0 0 0 153.5 6.951 A 5.522 5.522 0 0 0 153.17 7 Q 152.72 7.08 152.54 7.14 L 152.54 15.52 L 150.12 15.52 L 150.12 5.56 A 9.366 9.366 0 0 1 150.694 5.369 Q 151.214 5.214 151.87 5.07 A 9.726 9.726 0 0 1 153.124 4.884 A 12.665 12.665 0 0 1 154.2 4.84 A 4.606 4.606 0 0 1 154.391 4.844 Q 154.497 4.849 154.614 4.858 A 8.414 8.414 0 0 1 154.76 4.87 Q 155.08 4.9 155.4 4.95 Q 155.72 5 156.02 5.07 Q 156.32 5.14 156.5 5.2 Z M 56.18 5.06 L 56.18 15.52 L 53.76 15.52 L 53.76 5.06 L 56.18 5.06 Z M 93.18 5.06 L 93.18 15.52 L 90.76 15.52 L 90.76 5.06 L 93.18 5.06 Z M 172.32 5.06 L 172.32 15.52 L 169.9 15.52 L 169.9 5.06 L 172.32 5.06 Z M 24.76 7.08 L 24.76 13.06 A 2.625 2.625 0 0 0 25.03 13.221 Q 25.178 13.298 25.354 13.372 A 5.622 5.622 0 0 0 25.61 13.47 A 3.3 3.3 0 0 0 26.661 13.659 A 3.746 3.746 0 0 0 26.74 13.66 A 3.044 3.044 0 0 0 27.496 13.572 A 1.952 1.952 0 0 0 28.67 12.76 A 3.245 3.245 0 0 0 29.103 11.799 Q 29.28 11.159 29.28 10.34 Q 29.28 9.196 28.916 8.411 A 2.81 2.81 0 0 0 28.55 7.82 Q 27.82 6.92 26.2 6.92 Q 25.86 6.92 25.49 6.95 Q 25.12 6.98 24.76 7.08 Z M 193.32 12.44 L 193.32 7.02 Q 193.06 6.96 192.68 6.91 Q 192.422 6.876 192.071 6.865 A 11.342 11.342 0 0 0 191.72 6.86 A 3.193 3.193 0 0 0 190.886 6.963 A 2.227 2.227 0 0 0 189.7 7.73 A 3.039 3.039 0 0 0 189.125 8.92 Q 189 9.421 189 10.02 A 5.624 5.624 0 0 0 189.053 10.821 Q 189.188 11.76 189.67 12.27 A 2.233 2.233 0 0 0 191.221 12.975 A 3.022 3.022 0 0 0 191.4 12.98 A 3.735 3.735 0 0 0 192.231 12.89 A 3.344 3.344 0 0 0 192.49 12.82 Q 192.89 12.694 193.174 12.532 A 2.128 2.128 0 0 0 193.32 12.44 Z M 36.2 9.26 L 40.7 9.26 A 3.205 3.205 0 0 0 40.585 8.395 A 2.998 2.998 0 0 0 40.56 8.31 A 2.426 2.426 0 0 0 40.327 7.783 A 2.106 2.106 0 0 0 40.15 7.53 Q 39.88 7.2 39.49 7.01 A 1.814 1.814 0 0 0 39.019 6.859 Q 38.818 6.822 38.59 6.82 A 3.033 3.033 0 0 0 38.56 6.82 Q 38 6.82 37.58 7.03 Q 37.16 7.24 36.87 7.58 Q 36.58 7.92 36.42 8.36 Q 36.26 8.8 36.2 9.26 Z M 61.2 9.26 L 65.7 9.26 A 3.205 3.205 0 0 0 65.585 8.395 A 2.998 2.998 0 0 0 65.56 8.31 A 2.426 2.426 0 0 0 65.327 7.783 A 2.106 2.106 0 0 0 65.15 7.53 Q 64.88 7.2 64.49 7.01 A 1.814 1.814 0 0 0 64.019 6.859 Q 63.818 6.822 63.59 6.82 A 3.033 3.033 0 0 0 63.56 6.82 Q 63 6.82 62.58 7.03 Q 62.16 7.24 61.87 7.58 Q 61.58 7.92 61.42 8.36 Q 61.26 8.8 61.2 9.26 Z M 129.96 9.26 L 134.46 9.26 A 3.205 3.205 0 0 0 134.345 8.395 A 2.998 2.998 0 0 0 134.32 8.31 A 2.426 2.426 0 0 0 134.087 7.783 A 2.106 2.106 0 0 0 133.91 7.53 Q 133.64 7.2 133.25 7.01 A 1.814 1.814 0 0 0 132.779 6.859 Q 132.578 6.822 132.35 6.82 A 3.033 3.033 0 0 0 132.32 6.82 Q 131.76 6.82 131.34 7.03 Q 130.92 7.24 130.63 7.58 Q 130.34 7.92 130.18 8.36 Q 130.02 8.8 129.96 9.26 Z M 101.64 13.7 L 101.64 11.02 A 2.382 2.382 0 0 0 101.505 10.984 Q 101.369 10.952 101.18 10.92 A 9.381 9.381 0 0 0 101.06 10.9 Q 100.68 10.84 100.22 10.84 Q 99.82 10.84 99.41 10.9 A 2.718 2.718 0 0 0 98.94 11.01 A 2.27 2.27 0 0 0 98.67 11.12 Q 98.34 11.28 98.14 11.57 A 1.091 1.091 0 0 0 97.976 11.955 Q 97.94 12.114 97.94 12.3 A 2.133 2.133 0 0 0 97.98 12.731 Q 98.088 13.25 98.48 13.49 Q 98.898 13.745 99.544 13.803 A 4.457 4.457 0 0 0 99.94 13.82 Q 100.911 13.82 101.476 13.73 A 3.65 3.65 0 0 0 101.64 13.7 Z M 144.82 13.7 L 144.82 11.02 A 2.382 2.382 0 0 0 144.685 10.984 Q 144.549 10.952 144.36 10.92 A 9.381 9.381 0 0 0 144.24 10.9 Q 143.86 10.84 143.4 10.84 Q 143 10.84 142.59 10.9 A 2.718 2.718 0 0 0 142.12 11.01 A 2.27 2.27 0 0 0 141.85 11.12 Q 141.52 11.28 141.32 11.57 A 1.091 1.091 0 0 0 141.156 11.955 Q 141.12 12.114 141.12 12.3 A 2.133 2.133 0 0 0 141.16 12.731 Q 141.268 13.25 141.66 13.49 Q 142.078 13.745 142.724 13.803 A 4.457 4.457 0 0 0 143.12 13.82 Q 144.091 13.82 144.656 13.73 A 3.65 3.65 0 0 0 144.82 13.7 Z M 56.376 2.48 A 1.695 1.695 0 0 0 56.44 2 A 1.91 1.91 0 0 0 56.413 1.669 A 1.314 1.314 0 0 0 56 0.9 Q 55.56 0.5 54.96 0.5 Q 54.34 0.5 53.9 0.9 A 1.289 1.289 0 0 0 53.517 1.536 A 1.796 1.796 0 0 0 53.46 2 A 1.872 1.872 0 0 0 53.477 2.255 A 1.32 1.32 0 0 0 53.9 3.08 Q 54.34 3.48 54.96 3.48 Q 55.56 3.48 56 3.08 A 1.287 1.287 0 0 0 56.376 2.48 Z M 93.376 2.48 A 1.695 1.695 0 0 0 93.44 2 A 1.91 1.91 0 0 0 93.413 1.669 A 1.314 1.314 0 0 0 93 0.9 Q 92.56 0.5 91.96 0.5 Q 91.34 0.5 90.9 0.9 A 1.289 1.289 0 0 0 90.517 1.536 A 1.796 1.796 0 0 0 90.46 2 A 1.872 1.872 0 0 0 90.477 2.255 A 1.32 1.32 0 0 0 90.9 3.08 Q 91.34 3.48 91.96 3.48 Q 92.56 3.48 93 3.08 A 1.287 1.287 0 0 0 93.376 2.48 Z M 172.516 2.48 A 1.695 1.695 0 0 0 172.58 2 A 1.91 1.91 0 0 0 172.553 1.669 A 1.314 1.314 0 0 0 172.14 0.9 Q 171.7 0.5 171.1 0.5 Q 170.48 0.5 170.04 0.9 A 1.289 1.289 0 0 0 169.657 1.536 A 1.796 1.796 0 0 0 169.6 2 A 1.872 1.872 0 0 0 169.617 2.255 A 1.32 1.32 0 0 0 170.04 3.08 Q 170.48 3.48 171.1 3.48 Q 171.7 3.48 172.14 3.08 A 1.287 1.287 0 0 0 172.516 2.48 Z"
        fill="currentColor"
      />
    </chakra.svg>
  )
}