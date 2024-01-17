import fs from 'fs';
import { ImageResponse } from '@vercel/og';
import info from 'src/data/info.json';
 
interface Props {
  params: { slug: string };
}
 
export async function GET() 
{
  // array buffer to ptofile
  const profile = fs.readFileSync('./src/assets/images/profile/profile.png').buffer;

  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props:
          {
            tw: 'h-full w-4 absolute top-0 left-0',
            style:
            {
              background: 'linear-gradient(180deg, #7B88CE 0%, #D8ACCF 100%)'
            }
          }
        },
        {
          type: 'div',
          props: {
            tw: 'flex',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'h-full flex justify-center items-center p-2 rounded-full overflow-hidden' ,
                  style:
                  {
                    background: 'linear-gradient(180deg, #7B88CE 0%, #D8ACCF 100%)'
                  },
                  children: [
                    {
                      type: 'div',
                      props:
                      {
                        tw: 'bg-[#141416] flex justify-center items-center p-4 rounded-full overflow-hidden',
                        children: 
                        [
                          {
                            type: 'div',
                            props:
                            {
                              tw: 'w-[170px] h-[170px] flex rounded-full overflow-hidden',
                              children:
                              [
                                {
                                  type: 'img',
                                  props: 
                                  {
                                    src: profile,
                                  },
                                }
                              ]
                            }
                          }
                        ]
                      }
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
                        tw: 'text-7xl font-bold text-[#D8ACCF]',
                        children: info.name,
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        tw: 'text-5xl font-bold text-[#7B88CE]',
                        children: info.profession,
                      },
                    },
                  ],
                },
              }
            ],
          },
        },
      ],
      tw: 'flex w-full h-full justify-center items-center bg-[#141416] relative',
      style: 
      {
        fontFamily: 'Lato',
      },
    },
  };
  return new ImageResponse(html, {
    width: 1200,
    height: 600,
  });
}