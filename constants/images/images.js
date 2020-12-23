const images = {
  logo: 'https://ssfront.s3.eu-west-1.amazonaws.com/CUOFgSCSoFh9CWeYZvV80IgZDWEyl1e0.png',
  logoPrescription: 'https://ssfront.s3.eu-west-1.amazonaws.com/Omv4S2kvP1wjnHguWnEcxLS2Gs8sYUGv.png',
  truck: 'https://ssfront.s3.eu-west-1.amazonaws.com/Tc3jWkMv7otkM7Vjzd7PHVVuqHOsnvVa.png',
  trustPilot: 'https://ssfront.s3.eu-west-1.amazonaws.com/avOzYBE4fNtHoHvih8WbYM6P5V7ZXtmm.png',
  closeIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/2W49k5BvU1z1MIXzIl7gAylvMYDyINkv.svg%2Bxml',
  progressUnticked: 'https://ssfront.s3.eu-west-1.amazonaws.com/59OliHLq3R2uLDWA1pKYzecPPWagCdbU.png',
  progressTicked: 'https://ssfront.s3.eu-west-1.amazonaws.com/hp9gcjA8F8eEfuxmbHYDzclnryvHNZ3M.png',
  distanceIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/gAJ3ItFn1oS5tvS3uQMDEvqWjqLi9tkU.png',
  closeUpIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/cLSVlvpbGjAnQfWTMMFA6WG5MjkexOI2.png',
  multifocalIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/scbBDnCaIYSknfx04SgSxyhR3hdTv6Uh.png',
  nonPrescriptionIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/ms1mhsehe5VHHfOMjRnU3Y8kQOE4FEqA.png',
  summaryImage: 'https://ssfront.s3.eu-west-1.amazonaws.com/Gq2GsJ69LdLP46wkPklnZj9PiggI5Bbr.png',
  infoIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/xhQYC0PmmAQMyUy32osM2yL06BOt96dH.png',
  arrowRight: 'https://ssfront.s3.eu-west-1.amazonaws.com/aMACM8Hr4bPNzwXCVV4vZCxRlCjfJIxM.png',
  mail: 'https://ssfront.s3.eu-west-1.amazonaws.com/ktMGrJoEuatOHyXm3Xuk8V5cWOWrPi38.png',
  attachFile: 'https://ssfront.s3.eu-west-1.amazonaws.com/q0xOJcfQYpb3mob3R8lVcfqeEa7FcH4Q.png',
  enterPrescription: 'https://ssfront.s3.eu-west-1.amazonaws.com/UdG5EnsQddX0Ka33ALn2UTAgjW9BvSCK.png',
  computerIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/E8RraypVSCXjRL6xcwvFgpdw0oYGHTEw.png',
  lensGreenIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/Zh5d7CIL5NClSFLqLKkvGy6QSBmdgRIY.png',
  lensGreyIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/6yRIeYhGgDLA1Iug64yXm2hVPzuVfsE5.png',
  lensBrownIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/eLCOWHe5dw3qPvnh67XFp2noi9p8c5pn.png',
  lensBlueIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/W6aNu6LuUZ2guajyXryPVS5rwKFWycAC.png',
  lensYellowIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/Lj6YpZ1O8SqzO9kbisH07nZeRLPI96DE.png',
  lensPinkIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/oe4JZC56Str8IxBxIGp0tL1AdWlAs4vl.png',
  lensPurpleIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/NPqA25fZ6W1rdRMZ5GT1I9KyAnDaMl9x.png',
  lensRoseIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/ER488KVjcn7ZsDKM2OQfKctqlNgBbT5B.png',
  lensGreyGradientIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/AdLAf6JE1Y7x3uMhtlrMa96VqJHH3ksI.png',
  lensOrangeGradientIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/fdFV66MAp3DhqboWdMcMFzCxxnO34hzh.png',
  lensIconWithHome: 'https://ssfront.s3.eu-west-1.amazonaws.com/Tf9iEwcvP9AfL6UtnGWokeuw1aEf4mIZ.png',
  lensIconWithSun: 'https://ssfront.s3.eu-west-1.amazonaws.com/DfTCvIvhPPIW8ObFKegTUPgtx9nuzoau.png',
  transitionSignatureLogo: 'https://ssfront.s3.eu-west-1.amazonaws.com/kqKT9DGXriZ0gGWCBwAyLIwudkOnQ45q.png',
  transitionXtraDriveLogo: 'https://ssfront.s3.eu-west-1.amazonaws.com/uVaMxRBI18uyq1jdGO1aInXwDfjvf2Ql.png',
  transitionDrivenLogo: 'https://ssfront.s3.eu-west-1.amazonaws.com/eDTh58JT8yWjOWpDvjoRtUO7DFJRTZJy.png',
  regularFrame: 'https://d9qzjwuieyamt.cloudfront.net/public/en/res/images/items/fullsized/1602_01_1.jpg?ih20190903',
  thinLensIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/uTLL5zsGexyoCh42i7vECBGW2nJJgW2g.png',
  premiumLensIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/h4D0YA9TySSSlACnWsonE8tjQ38DNEhi.png',
  questionCircle: 'https://ssfront.s3.eu-west-1.amazonaws.com/IoZNv6uwLzxUMMIVVw1K5vVnT9rHFbsV.svg%2Bxml',
  userIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/CLLFf5JZOhqX0I6bdEi0epJdnkPa5KGE.svg%2Bxml',
  phoneIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/SB9oVZnGwV5QqwkG3ywWAAG9VnKrO62G.svg%2Bxml',
  closeIconDark: 'https://ssfront.s3.eu-west-1.amazonaws.com/Nr21WAsXn8dU5IX7JrHnS1Cv636qJoHA.svg%2Bxml',
  radioButtonCheckedRed: 'https://ssfront.s3.eu-west-1.amazonaws.com/i7qKnEVOwKRMzgLa1UH4ukt90Q1caddC.svg%2Bxml',
  radioButtonBlack: 'https://ssfront.s3.eu-west-1.amazonaws.com/1SmlFOxCv2GW7nk78C58Er4Z6rcgAC90.svg%2Bxml',
  percentageIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/8f3J8nPcp4L5Hf7UXJV4RIXGdBC6A50m.svg%2Bxml',
  returnsIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/3YwSxZCJYpdKqQXjJCM8vAthVZhY9XPB.svg%2Bxml',
  speedCarIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/YdgsVlvSmnC5Bb50nVT57o0p08XqFijY.svg%2Bxml',
  speedCarBlueIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/2y0kc4J60vDV8hSBWa4EReEOsAmmCSYE.svg%2Bxml',
  rullerIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/f4srnODYeIhrUDANpbvNKIM24fUYc8Fu.svg%2Bxml',
  womanIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/1nsb7FE5Pn18vLWJRQbZefRHPjSKa44X.svg%2Bxml',
  manIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/637Fh3OY0vjwPgxHBNyepz1WoI0WsvVV.svg%2Bxml',
  redDot: 'https://ssfront.s3.eu-west-1.amazonaws.com/JwwjiEYwtAmvRnKCftA5ZFSHUj6EBJAB.svg%2Bxml',
  rimlessFrame: 'https://ssfront.s3.eu-west-1.amazonaws.com/4DYm25QbqFaL4OptF5Gc3RXhYvWBeV1j.svg%2Bxml',
  semiRimlessFrame: 'https://ssfront.s3.eu-west-1.amazonaws.com/RZHg7ofj1Xm3I6qhbxWhRN8EU3FT9Ghs.svg%2Bxml',
  roundFrame: 'https://ssfront.s3.eu-west-1.amazonaws.com/YTnue7cE511Xj3BfZlzMfcCnxRTlREhe.svg%2Bxml',
  squareFrame: 'https://ssfront.s3.eu-west-1.amazonaws.com/oJJbxdtkuvbfUjnTMnM7FHHQ1B1m4mOa.svg%2Bxml',
  browLineFrame: 'https://ssfront.s3.eu-west-1.amazonaws.com/U14LKdfaKxVMzZW26kT5K9bgh8hsXTko.svg%2Bxml',
  aviatorFrame: 'https://ssfront.s3.eu-west-1.amazonaws.com/gSXPBsV9xE6cNLeIwS3yCxzaSQwn5Cbg.svg%2Bxml',
  wayfarerFrame: 'https://ssfront.s3.eu-west-1.amazonaws.com/ZU8jDNXH4NyjYtQfVoyuRiIP015IAPUT.svg%2Bxml',
  luxuryFrame: 'https://ssfront.s3.eu-west-1.amazonaws.com/J8WWSBaVkWnv1aeqw9NXlrUyHhOcVm1n.svg%2Bxml',
  fullRimframe: 'https://ssfront.s3.eu-west-1.amazonaws.com/8suu4SdKLwKExyrejJM8YtLZHqhBRAa5.svg%2Bxml',
  catEyeFrame: 'https://ssfront.s3.eu-west-1.amazonaws.com/KmRQHUeqvrAtSfYAnPU9aSkKDPXBIHEG.svg%2Bxml',
  arrowUpBlack: 'https://ssfront.s3.eu-west-1.amazonaws.com/PdjH0vPXl9oXRo4IO3hZ7jCPMNLkPk6T.svg%2Bxml',
  armWidthIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/bVCRFyu5AhAiUjhPgv5OWQDvUV9oI2qi.svg%2Bxml',
  bridgeWidthIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/VxI9syJP9xf4Sxq1YZKEsZHhZYGOXqQR.svg%2Bxml',
  lensHeightIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/ZwovAxzdxE6p5I397xXfznBIWYaWs6pJ.svg%2Bxml',
  lensWidthIcon: 'https://ssfront.s3.eu-west-1.amazonaws.com/NupQz0C19DXEU9Xzj59xBcN8f5rswetQ.svg%2Bxml',
  totalWidthFrame: 'https://ssfront.s3.eu-west-1.amazonaws.com/iLKkDFeSNG9IxMmGjO3U4yC6ZZFG2XZJ.svg%2Bxml',
};
export default images;
