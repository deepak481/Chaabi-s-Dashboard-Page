import React from 'react';

export const Game = (color) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M13.3026 4.64752V4.86047C12.7318 4.84926 12.1609 4.84926 11.5901 4.84926V4.65873C11.5901 3.88538 10.9393 3.25773 10.1629 3.25773H9.03264C7.74251 3.25773 6.69214 2.2266 6.69214 0.971305C6.69214 0.511778 7.08032 0.130707 7.54842 0.130707C8.02794 0.130707 8.4047 0.511778 8.4047 0.971305C8.4047 1.30754 8.69012 1.57654 9.03264 1.57654H10.1629C11.8869 1.58774 13.2912 2.96632 13.3026 4.64752Z"
        fill={color.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4652 4.88048C15.8318 4.88551 16.1993 4.89055 16.568 4.89432C20.5297 4.89432 23.4182 7.71873 23.4182 11.6191V16.6291C23.4182 20.5294 20.5297 23.3538 16.568 23.3538C14.981 23.3875 13.3941 23.3987 11.7957 23.3987C10.1973 23.3987 8.58748 23.3875 7.00051 23.3538C3.03878 23.3538 0.150269 20.5294 0.150269 16.6291V11.6191C0.150269 7.71873 3.03879 4.89432 7.01192 4.89432C8.50756 4.8719 10.0374 4.84949 11.5902 4.84949C12.161 4.84949 12.7319 4.84949 13.3027 4.8607C14.0225 4.8607 14.7422 4.87057 15.4652 4.88048ZM10.4485 14.9591H9.24966V16.1471C9.24966 16.6067 8.86148 16.9877 8.39338 16.9877C7.91386 16.9877 7.5371 16.6067 7.5371 16.1471V14.9591H6.32689C5.85879 14.9591 5.47061 14.5892 5.47061 14.1185C5.47061 13.659 5.85879 13.2779 6.32689 13.2779H7.5371V12.101C7.5371 11.6415 7.91386 11.2604 8.39338 11.2604C8.86148 11.2604 9.24966 11.6415 9.24966 12.101V13.2779H10.4485C10.9165 13.2779 11.3047 13.659 11.3047 14.1185C11.3047 14.5892 10.9165 14.9591 10.4485 14.9591ZM15.3007 13.0649H15.4149C15.883 13.0649 16.2711 12.6951 16.2711 12.2243C16.2711 11.7648 15.883 11.3837 15.4149 11.3837H15.3007C14.8212 11.3837 14.4444 11.7648 14.4444 12.2243C14.4444 12.6951 14.8212 13.0649 15.3007 13.0649ZM17.253 16.9205H17.3672C17.8353 16.9205 18.2235 16.5506 18.2235 16.0799C18.2235 15.6204 17.8353 15.2393 17.3672 15.2393H17.253C16.7735 15.2393 16.3967 15.6204 16.3967 16.0799C16.3967 16.5506 16.7735 16.9205 17.253 16.9205Z"
        fill={color.color}
      />
    </svg>
  );
};