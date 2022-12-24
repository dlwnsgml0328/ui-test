import React from 'react';
import Tilt from 'react-parallax-tilt';

import EazelImage from '@eazelui/system.components.image';

import Grid from '@eazelui/system.components.grid';
import Card from '@eazelui/system.components.card';
import Text from '@eazelui/system.components.text';
import Tag from '@eazelui/system.components.tag';
import Button from '@eazelui/system.components.button';
import ArrowLeft from '@eazelui/system.icons.arrow-left';
import ArrowRight from '@eazelui/system.icons.arrow-right';

import Image from 'next/image';

const GuidedTours = [
  {
    days: '32',
    title: '70 Years of Correspondences: MAGNUM PHOTOS and PICTO 1950-2020',
    type: 'Exhibition',
    representative_image: {
      webp5000:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_5000%2Fexhibition_7_5000x5000.webp?alt=media&token=d9668752-db4d-4aa5-af9e-848cdbb28844',
      webp10:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_10%2Fexhibition_7_10x10.webp?alt=media&token=da41f69e-f5e8-4a2b-ab2d-ff329b1eb555',
    },
    artists: {
      JqQLIiTwO3WTqwzPT811: {
        id: 'JqQLIiTwO3WTqwzPT811',
        first_name: 'John',
        last_name: 'Doe',
      },
    },
  },
  {
    title: 'Discovering Viceregal Latin American Treasures',
    representative_image: {
      webp10:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_10%2Fexhibition_1_10x10.webp?alt=media&token=62e8557a-b862-4057-a94f-bd02638031ab',
      webp5000:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_5000%2Fexhibition_1_5000x5000.webp?alt=media&token=22b125df-c604-4b86-b3d3-762fe3ecd1f1',
    },
    key_takeaways: [
      'The gallery presents a major survey of Latin American art from the Viceregal period, assembled in collaboration with Jaime Eguiguren, the world’s preeminent expert on viceregal art',
      "The exhibition brings together more than 100 paintings, sculptures, textiles, and objects from the 17th to 18th centuries, with select Pre-Columbian and Modern masterpieces, reflecting Colnaghi's commitment to supporting cross-category collecting",
    ],
    type: 'Exhibition',
    artists: {
      JqQLIiTwO3WTqwzPT811: {
        id: 'JqQLIiTwO3WTqwzPT811',
        first_name: 'John',
        last_name: 'Doe',
      },
    },
  },
  {
    type: 'Exhibition',
    title: 'Shadowman',
    key_takeaways: [
      'Solo exhibition of Richard Hambleton, widely known as the undisputed “Godfather of Street Art” who inspired Banksy',
      'Hambleton enjoyed his prime time during the booming 80s along with Keith Haring and Jean-Michel Basquiat in NYC Street art scene',
    ],
    end_date: {
      seconds: 1575644453,
      nanoseconds: 538000000,
    },
    representative_image: {
      webp5000:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_5000%2Fexhibition_3_5000x5000.webp?alt=media&token=16c01b44-b233-4f48-87cb-4053600547f9',
      webp10:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_10%2Fexhibition_3_10x10.webp?alt=media&token=30c00355-a89d-45ca-b01a-4095279a578d',
    },
    new: true,
    artists: {
      JqQLIiTwO3WTqwzPT811: {
        id: 'JqQLIiTwO3WTqwzPT811',
        first_name: 'John',
        last_name: 'Doe',
      },
    },
  },
  {
    type: 'Exhibition',
    days: '3',
    new: true,
    title: 'Helen Pashgian',
    representative_image: {
      webp5000:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_5000%2Fexhibition_4_5000x5000.webp?alt=media&token=a379ee1a-3b3e-408e-ab3f-b649304518bf',
      webp10:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_10%2Fexhibition_4_10x10.webp?alt=media&token=c14a6b1e-eaf1-45fb-abc7-1e7fdb2d43fa',
    },
    artists: {
      JqQLIiTwO3WTqwzPT811: {
        id: 'JqQLIiTwO3WTqwzPT811',
        first_name: 'John',
        last_name: 'Doe',
      },
    },
  },
  {
    title: 'Helen Pashgian',
    representative_image: {
      webp5000:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_5000%2Fexhibition_5_5000x5000.webp?alt=media&token=c2bb8663-ab0e-410f-87fe-02cde6d2561e',
      webp10:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_10%2Fexhibition_5_10x10.webp?alt=media&token=cb6994cd-0afa-4a44-8435-8c5b0372376c',
    },
    type: 'Exhibition',
    artists: {
      JqQLIiTwO3WTqwzPT811: {
        id: 'JqQLIiTwO3WTqwzPT811',
        first_name: 'John',
        last_name: 'Doe',
      },
    },
  },
  {
    type: 'Exhibition',
    start_date: {
      seconds: 1630076453,
      nanoseconds: 538000000,
    },
    title:
      'Arcmanoro Niles, Hey Tomorrow, Do You Have Some Room For Me: Failure Is A Part Of Being Alive',
    representative_image: {
      webp5000:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_5000%2Fexhibition_2_5000x5000.webp?alt=media&token=ca77d711-4815-453e-bfde-2cff5eef834e',
      webp10:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_10%2Fexhibition_2_10x10.webp?alt=media&token=f9b78feb-4cf7-4b59-8a2b-c48c26e53a3d',
    },
    end_date: {
      seconds: 1622646053,
      nanoseconds: 538000000,
    },
    artists: {
      JqQLIiTwO3WTqwzPT811: {
        id: 'JqQLIiTwO3WTqwzPT811',
        first_name: 'John',
        last_name: 'Doe',
      },
    },
  },
  {
    type: 'Exhibition',
    representative_image: {
      webp5000:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_5000%2Fexhibition_6_5000x5000.webp?alt=media&token=3a3f20fe-3a0b-4c56-a7be-3f1866cfef01',
      webp10:
        'https://firebasestorage.googleapis.com/v0/b/project-74d7a.appspot.com/o/images%2Fwebp_10%2Fexhibition_6_10x10.webp?alt=media&token=1176bdb4-21c7-46f5-9a3e-d164142a91bd',
    },
    start_date: {
      seconds: 1610722857,
      nanoseconds: 127000000,
    },
    title: 'FORM AND VOID',
    end_date: {
      seconds: 1614438057,
      nanoseconds: 127000000,
    },
    artists: {
      JqQLIiTwO3WTqwzPT811: {
        id: 'JqQLIiTwO3WTqwzPT811',
        first_name: 'John',
        last_name: 'Doe',
      },
    },
  },
];

const Test = () => {
  return (
    <Grid
      css={{
        '::-webkit-scrollbar-thumb': {
          display: 'none',
        },
        '::-ms-scrollbar-thumb': { display: 'none' },
      }}
    >
      <Grid
        autoFlow={'column'}
        css={{
          alignItems: 'center',
          gridArea: '1/1',
          overflowX: 'auto',
          overflowY: 'hidden',
          rpH: 170,
          rpPl: 40,
          rpPr: 40,
          scrollBehavior: 'smooth',
        }}
        rpColumnGap={20}
      >
        {GuidedTours.map((doc, idx) => (
          <Grid
            css={{
              rpH: 155,
              '& p': {
                transition: 'color .3s',
              },
              '.image': {
                filter: 'brightness(90%)',
              },
              '&:hover': {
                '& p': {
                  color: '$blue50',
                  transition: 'color .3s',
                },
                '.image': {
                  filter: 'drop-shadow(10px 10px 10px #5672ff33) brightness(103%)',
                },
              },
            }}
            key={idx}
          >
            <Tilt key={idx} style={{ cursor: 'pointer', gridArea: '1/1' }}>
              <a>
                <EazelImage
                  className='image'
                  //   onMouseEnter={() => cursorChangeHandler('hovered')}
                  //   onMouseLeave={() => cursorChangeHandler('')}
                >
                  <Image
                    alt={'Home Featured'}
                    blurDataURL={doc.representative_image.webp10}
                    layout={'fill'}
                    objectFit={'cover'}
                    placeholder={'blur'}
                    src={doc.representative_image.webp5000}
                  />
                </EazelImage>
              </a>
            </Tilt>

            <Card
              css={{
                gridArea: '1/1',
                pointerEvents: 'none',
                rpP: 3,
                rpW: 190,
              }}
              shadow={'none'}
            >
              <Card.Header>
                <Text
                  className='title'
                  css={{ color: '$white' }}
                  lineClamp={2}
                  fontFamily={'poppins'}
                  fontWeight={'medium'}
                  rpFontSize={12}
                >
                  {doc.title}
                </Text>
              </Card.Header>
              <Card.Body></Card.Body>

              <Card.Footer css={{ rpGap: 1 }}>
                {Object.values(doc.artists).length > 2 ? (
                  <Text css={{ color: '$white' }} rpFontSize={5}>
                    Various Atists
                  </Text>
                ) : (
                  <>
                    {Object.values(doc.artists).map((artist: any) => {
                      return (
                        <Text css={{ color: '$white' }} key={artist.first_name} rpFontSize={5}>
                          {artist.first_name} {artist.last_name}
                        </Text>
                      );
                    })}
                  </>
                )}

                <Tag colorType={'primary'} css={{ justifySelf: 'end' }} size={'xs'}>
                  Exhibition
                </Tag>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Test;
