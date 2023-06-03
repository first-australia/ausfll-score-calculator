import { seasons } from 'first-constants';

type Mission = `m${number}${number}`;

// type Links = {[key:string]: string};
const missionPics: {
  [key in (typeof seasons)[number]]: { [key: Mission]: string };
} = {
  [20192020]: {},
  [20202021]: {},
  [20232024]: {},
  [20212022]: {
    m00: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm00.jpg?alt=media&token=dc5d50dc-c85b-4495-994e-3f74458f619b',
    m01: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm01.png?alt=media&token=dc4b6232-6970-46e9-9364-10816c2097a5',
    m02: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm02.png?alt=media&token=b007bf24-926e-4d81-b2ef-a612a58e8fbd',
    m03: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm03.png?alt=media&token=ca2fa0d3-ad21-4d5f-b041-2a72326f0ebe',
    m04: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm04.png?alt=media&token=8ef370eb-6f47-49c3-a308-83a075548073',
    m05: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm05.png?alt=media&token=fc3215bc-39e7-4c32-88b5-06c224a253dc',
    m06: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm06.png?alt=media&token=a818d0a7-7148-4cc9-9268-5bce69c9922a',
    m07: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm07.png?alt=media&token=4b8fa910-62ee-421b-a020-58dcdf205f53',
    m08: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm08.png?alt=media&token=1554eea7-74e1-4879-aa90-fdfd930b04df',
    m09: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm09.png?alt=media&token=201b301f-6341-4f7d-b14a-57d7cd42658b',
    m10: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm10.png?alt=media&token=0925aeec-7a81-4d81-8687-dae3090a9e69',
    m11: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm11.png?alt=media&token=ca0e31aa-59c1-44a2-a9fb-7d3ad054c6bc',
    m12: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm12.png?alt=media&token=1c012593-9319-429e-90ee-74b4e94ce09d',
    m13: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm13.png?alt=media&token=1d0e6e11-14e8-40f5-b997-56d4492252a5',
    m14: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm14.png?alt=media&token=20359260-8ca0-44e2-a46e-59488bd75370',
    m15: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm15.png?alt=media&token=ca209ac4-bef5-414a-9721-9bab2cd1a747',
    m16: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm16.png?alt=media&token=4708b8d0-0938-49f5-832c-809f8fe659d1',
    m17: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fcargo_connect%2Fm17.png?alt=media&token=4dde3cd5-bc1e-4136-8ca4-1b802f087978',
  },
  [20222023]: {
    m00: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m00.png?alt=media&token=4254e65f-d66a-4998-b726-7f89df87906e',
    m01: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m01.png?alt=media&token=a9169044-0132-4fc0-b1f7-058762a6497c',
    m02: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m02.png?alt=media&token=a552b42d-76bf-4ec5-8b04-212918c22afa',
    m03: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m03.png?alt=media&token=0efe49d5-d805-4398-8d51-eabaa484dfb9',
    m04: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m04.png?alt=media&token=7de9ca07-0753-46d6-9ca7-0a1ae4cc42e4',
    m05: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m05.png?alt=media&token=83832d7c-e8ee-48be-8b13-5355e62b1e1d',
    m06: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m06.png?alt=media&token=b1a2e181-27b8-4a32-b02e-d4f06e962fb9',
    m07: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m07.png?alt=media&token=2fc0ea8c-21fe-4240-a529-be07723bf856',
    m08: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m08.png?alt=media&token=33822a80-e6e5-4617-982c-77a3c7f5d56a',
    m09: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m09.png?alt=media&token=2fd20819-aaa8-4ae7-8ea8-b8668073240c',
    m10: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m10.png?alt=media&token=d9276d54-bd59-4b76-adf5-3bf59431ffd7',
    m11: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m11.png?alt=media&token=aad0c88e-eea8-4e36-94e9-e749072d1e32',
    m12: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m12.png?alt=media&token=3768995e-3f45-4a23-b1e8-ff0d95068b52',
    m13: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m13.png?alt=media&token=a353074f-42cd-4e6c-9e45-648042c1cee0',
    m14: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m14.png?alt=media&token=aafa081f-eb6b-4107-b6d6-03732e0cf60d',
    m15: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m15.png?alt=media&token=49236090-5ad9-415c-8c77-e40c66194595',
    m16: 'https://firebasestorage.googleapis.com/v0/b/firstaustralia-system.appspot.com/o/scoring%2Fsuperpowered%2Fsp_m16.png?alt=media&token=3b6b59d3-c93a-4f03-852d-ac8b66216320',
  },
};
export default missionPics;
