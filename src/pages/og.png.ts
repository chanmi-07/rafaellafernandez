import Profile from '@assets/images/profile/profile.png';
import fs from 'fs';
import { ImageResponse } from '@vercel/og';
 
interface Props {
  params: { slug: string };
}
 
export async function GET() 
{
  // array buffer to ptofile
  const profile = fs.readFileSync('./src/assets/images/profile/profile.png');
  const profileArrayBuffer = Uint8Array.from(profile).buffer;

  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            tw: 'flex',
            children: [
              {
                type: 'div',
                props: {
                  // using tailwind
                  tw: 'w-[200px] h-[200px] flex rounded-3xl overflow-hidden',
                  children: [
                    {
                      type: 'img',
                      props: {
                        src: profileArrayBuffer,
                      },
                    },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'ml-4 flex flex-col justify-center',
                  children: [
                    {
                      type: 'div',
                      props: {
                        tw: 'text-5xl font-bold text-[#D8ACCF]',
                        children: 'Rafaella Fernández',
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        tw: 'text-3xl font-bold text-[#7B88CE]',
                        children: 'Desarrolladora de Software',
                      },
                    },
                  ],
                },
              }
            ],
          },
        },
      ],
      tw: 'flex w-full h-full justify-center items-center bg-[#141416]',
      style: {
        // background: '#141416',
        fontFamily: 'Lato',
      },
    },
  };
 
  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    // fonts: [
    //   {
    //     name: 'DM Sans Bold',
    //     data: DmSansBold.buffer,
    //     style: 'normal',
    //   },
    //   {
    //     name: 'DM Sans Regular',
    //     data: DmSansReqular.buffer,
    //     style: 'normal',
    //   },
    // ],
  });
}