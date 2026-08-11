'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f8863a343896509f1091efb16e29f9e2",
"assets/AssetManifest.bin.json": "730e17c9172de88ed0fa5ffcdc7b9422",
"assets/AssetManifest.json": "eec0078c60b626fecbb96c9899053601",
"assets/assets/images/3.jpg": "957cfbe2fb7f33c0ad1db889aaab4cb4",
"assets/assets/images/activitylogo.jpg": "c71e54cbe5b5803e9686f2b02133b7d1",
"assets/assets/images/ads1.jpg": "1ba07872fc2d8e9e2458bc82afec88fd",
"assets/assets/images/agmyactivity3.png": "a4835ab67d35e21e71f73e8ccbc19cc4",
"assets/assets/images/agmyactivitylogo.png": "4d7d9b702bfd96703b1b85b2c62f127e",
"assets/assets/images/agmyaly1.jpg": "951190d85d5c3c124019ae7a20e3898e",
"assets/assets/images/agmyaly2.jpg": "07c7d9fe90cba7982752518bc0b8cdc5",
"assets/assets/images/agmyaly3.jpg": "db6dd56abacb8a0f032e7bf80394fe91",
"assets/assets/images/agmycafe.jpg": "8f2431823d460dd9589f09b352832cb4",
"assets/assets/images/agmyfakher1.jpg": "5af71f6d799b4bf67e929eaa2e3d5328",
"assets/assets/images/agmyfakher2.jpg": "61906b43c79ff1dfd4c3df0218f06cce",
"assets/assets/images/agmyfakher3.jpg": "231f38b90ea9cc7584f4fa5337b7e6a6",
"assets/assets/images/agmygym1.png": "0bc12b3bf022e2fc2907ff2612e20243",
"assets/assets/images/agmygym2.png": "b3181bbabe1cd501e200cee0eed08e94",
"assets/assets/images/agmygym3.png": "d4512b371da5c88c8e43a930313bcfa5",
"assets/assets/images/agmylopy1.jpg": "cec06b991a54e3df5705086b08da7b00",
"assets/assets/images/agmylopy2.jpg": "80fefe0bdc3328edb6b632c6fc643461",
"assets/assets/images/agmylopy3.jpg": "b68e69a26f82cfdbe4b8172f2da75747",
"assets/assets/images/agmylopy4.jpg": "bcb92030d45a11b04f0ee116517cfc4a",
"assets/assets/images/agmylopy5.jpg": "c7e96c7abd9410072d7cff1fb3d968f5",
"assets/assets/images/agmylopy7.jpg": "44794f6e49dc1cdf94f907c5ce13d28f",
"assets/assets/images/agmymlky1.jpg": "f4791104246d0eed392de5773e2aa885",
"assets/assets/images/agmymlky2.jpg": "dc2b2b0cd2ab2dc08b55a9bd3b35d40c",
"assets/assets/images/agmymlky3.jpg": "9dfedea5a6032ecd43eca58540387e75",
"assets/assets/images/agmypool2.jpg": "805ac85d38c401f4373a572501186df6",
"assets/assets/images/agmypool5.jpg": "2f89f80abb814ba507754a97e5abd2e9",
"assets/assets/images/agmyresturant.jpg": "6bdc3effc5518bd02eff20c803d50da1",
"assets/assets/images/agmyresturant1.png": "1e24a28eb72ed03e16006e941d90c5a2",
"assets/assets/images/agmyresturant2.png": "33418c4e4521218f172db11a72dcdce6",
"assets/assets/images/agmyresturant3.png": "49a10253e232143ee37dc32a3554c290",
"assets/assets/images/agmyroom1.jpg": "d06530690f552cbb5508ad05afde0929",
"assets/assets/images/agmyroom2.jpg": "8e2c800b372a4d34f207c07b2817f2d2",
"assets/assets/images/agmyroom3.jpg": "e1669c5722aae3bc63a3b7444b806c5e",
"assets/assets/images/agmysweet1.png": "7049f5800cd1d4621c0951d1fd64b68b",
"assets/assets/images/agmysweet2.png": "48557bfbdccafd0a88652f4d847c8a19",
"assets/assets/images/agmysweet3.png": "8e2c2dd2ca7f29213379bb64fc6b55b0",
"assets/assets/images/agmyterace1.png": "872905660960aaf05f0235a0191f5c6f",
"assets/assets/images/agmyterace2.png": "d29d974bc1dbf6461210dc125c7f26d1",
"assets/assets/images/alazby.jpg": "d794fbc0539a3660f44dfa933b15fa68",
"assets/assets/images/alnozhaactivitylogo.jpg": "590be2233e99247a643af44648f04693",
"assets/assets/images/alnozhabasketball1.jpg": "b5a347bfe25b5fd8677b1f90e4b2d912",
"assets/assets/images/alnozhabasketball2.jpg": "abf63c6acce9ac30450980f383e23362",
"assets/assets/images/alnozhagrand1.jpg": "b663156fed01f4e59fd6358f3b31f9c6",
"assets/assets/images/alnozhagrand2.jpg": "96431c5a5e3cb9a01e63eb81f32e7ff0",
"assets/assets/images/altgmoofun.jpg": "105b0d17b097ed94aec8245cea67c7fa",
"assets/assets/images/altgmoogarden1.jpg": "82a890036163a522a1ddf5dcc0afc699",
"assets/assets/images/altgmoogarden2.jpg": "e7eb44bc55ec680a985f04364fa86c77",
"assets/assets/images/altgmoogarden3.jpg": "4d0c6d7421e31e1ea666626e903205d9",
"assets/assets/images/altgmoogarden4.jpg": "ed5e2c261f5c61e86ad0b464bae8f53b",
"assets/assets/images/altgmoogarden5.jpg": "576e947341ab9b308136f78076cf1551",
"assets/assets/images/altgmoohotel.jpeg": "769fef917b026a64c9758728fc2bd31a",
"assets/assets/images/altgmoomain.jpeg": "8d2306c48651b614e882644fdd905993",
"assets/assets/images/altgmooplaza.jpg": "1649e6981258f5d310505b3c73e701b2",
"assets/assets/images/apartmentnorth.mp4": "5269457fbcb9ede0801f8e2bdf77426d",
"assets/assets/images/b1.jpg": "605cc06e14ee6fd23dcaad0e7873c4f8",
"assets/assets/images/b2.jpg": "14823bdbe5d6a5538f6a9d4c1e835e93",
"assets/assets/images/b3.jpg": "372e7696a9f81db14747dc3843e5dcd4",
"assets/assets/images/b4.jpg": "f1e640ce39f80d23c4571ca86b3b6a52",
"assets/assets/images/b5.jpg": "9ab21f94c16c2758f7b337789e5e909c",
"assets/assets/images/b6.jpg": "09a0abd8b43c9759368a525c929bcb41",
"assets/assets/images/bambo2.jpg": "e9d759d2d64b2e3f5c67f91cc17957a9",
"assets/assets/images/bambo3.jpg": "42e354cc008ed250ab92b2ffd160e27e",
"assets/assets/images/bambo5.jpg": "7a05773f30d4d06bceb0612878c073c2",
"assets/assets/images/bamo1.jpg": "3deacacfc1a84a1ba07364e435f388d3",
"assets/assets/images/bansee.mp4": "d8b2308bd2591af3d61cd7165ea873f7",
"assets/assets/images/bansss1.jpg": "a6ba37cb07698c8bc3ab87aa8b3b4419",
"assets/assets/images/bansss2.jpg": "0aa0514e9575a7ea82c0c43bd14d05f4",
"assets/assets/images/bansss3.jpg": "87053f3bf338e8b8a8124ab611de590f",
"assets/assets/images/bansss4.jpg": "9b8e0aaacd5203c5597b8315e4616990",
"assets/assets/images/bansss5.jpg": "8da291814559f64a3631faba88d339a4",
"assets/assets/images/basketatag1.webp": "5ebb6b8d2165b025bbda5edc02cc1688",
"assets/assets/images/basketatag2.webp": "4328342f122670733166aafdc6099b7c",
"assets/assets/images/beauty.png": "3315c1575188e1838776f849065c91eb",
"assets/assets/images/beauty.webp": "0567f7cfc0aa339eba1c2e8be202f4c3",
"assets/assets/images/beautyclininc.jpg": "8782713d31ab678c19fea0b447837bfb",
"assets/assets/images/blue1.jpg": "8251946f681e44008364517191b2cbf7",
"assets/assets/images/blue2.jpg": "0d349d4f4748d2e1f2b048df63145821",
"assets/assets/images/blue3.jpg": "0c09ce3e0b41ba116f70e64932e8f8b1",
"assets/assets/images/blue4.jpg": "e40b070cb5d71b53ed3dd8eb7be0bdf8",
"assets/assets/images/blue5.jpg": "17f737eea91090e0c6f7368b243722e9",
"assets/assets/images/complian.png": "bfea6ab50a8d5c2ebc1ab5daa9dd62d0",
"assets/assets/images/Contact-Us.png": "35ca51f8739dd76ce1b9fd33c4bbd05d",
"assets/assets/images/contactlogo.jpeg": "0eb18ee34efc9a186ac09d881ec1afd8",
"assets/assets/images/contactlogoggo.webp": "32643a59b7ed555c638438bfc3a15cb4",
"assets/assets/images/contactus.jfif": "6b181a79ea75ede6e0303cb99d7d49ae",
"assets/assets/images/dar1.jpg": "fbd1f78e4e9c13e775e6e29d35428df6",
"assets/assets/images/dar2.jpg": "2f20d7f58dd2fbff0201ee5ae6d308ad",
"assets/assets/images/digitalvision.jpg": "89d0ad381ab202902ed8190ea4e9ba65",
"assets/assets/images/doublexchalet1.jpg": "e7ffb2bd8546258ea72f0c3e50965987",
"assets/assets/images/doublexchalet12.jpg": "2037d604b109c39ff0c77a2dedfad442",
"assets/assets/images/doublexchalet13.jpg": "433ff019646743e555e1dfd252e1cbae",
"assets/assets/images/doublexchalet14.jpg": "55df9f8203a2c39fb8f3c5757a9b9d65",
"assets/assets/images/doublexchalet15.jpg": "8b2267441124aa1541ca91aa0826ee4f",
"assets/assets/images/doublexchalet16.jpg": "ede351da65adb294c48d40d7361009fb",
"assets/assets/images/doublexchalet17.jpg": "560555b50d7316a99439f53ec22ea354",
"assets/assets/images/drycleanlogo.jpg": "897ab2cde1cb734b4f35f7bc293bad28",
"assets/assets/images/drycleanlogo2.jpg": "7ce60c4fc95b8513cc2d6333fd29b23b",
"assets/assets/images/drycleanlogoooo.jpg": "a79f82fe2ff10f0b055e9d98cfa37f76",
"assets/assets/images/facebook.png": "a2ad2654891a8b7ce3fb6f3b2c2b62cf",
"assets/assets/images/finalpromo.mp4": "1892bc9ded99f6a04b02bf9a79c373ac",
"assets/assets/images/footballtag.webp": "9d8cf2c314d622efd42ea149417fcb61",
"assets/assets/images/g1.jpg": "e703235776b10742ad3718a363341727",
"assets/assets/images/g2.jpg": "b51c4618eb84eae6f70cf04e1df73294",
"assets/assets/images/g4.jpg": "70cbe1b82401af85abbf48f5dc250815",
"assets/assets/images/g5.jpg": "8974613a92a94f0e3d95e25ef8032746",
"assets/assets/images/garage1.webp": "edb9922dcfe3a62fdf9fdd6875f21aa9",
"assets/assets/images/garage2.webp": "899e4ebcbd547db72fef02dae7aea6d4",
"assets/assets/images/garage3.webp": "63516b7cc341d93793f54e765adaa4e2",
"assets/assets/images/garden1.jpg": "b5fb3d8a7864b61ea9d9533bc8da8872",
"assets/assets/images/garden2.jpg": "c385c7004534e52eab4e2887cc99aaf4",
"assets/assets/images/garden3.jpg": "6f7b167fcc05217b18ee5f5246f6cb76",
"assets/assets/images/gardenvip.jpg": "826fc1a0c15970927f2c97180f96cb93",
"assets/assets/images/gardenvip2.jpg": "d12894fbcfb2694db0e87c419f815be7",
"assets/assets/images/gardenvip3.jpg": "0207985a805cf50ddd0080622bebad60",
"assets/assets/images/gardenvip4.jpg": "19cbe7bf2d2874e5b37c3286e6dc856e",
"assets/assets/images/grand2.jpg": "b36536006365797160e345a41225b3e4",
"assets/assets/images/grandcafe1.jpg": "88bdfeb847c2ae9e63d434945da6017d",
"assets/assets/images/grandcafe2.jpg": "cd07fde5458afd842e55d09ba8f89fa9",
"assets/assets/images/grandcafe3.jpg": "d0483a386e5704626fd346825f44f504",
"assets/assets/images/grandcafe4.jpg": "26f8ee2220479fd3b02f77a45540d0da",
"assets/assets/images/grandcafe5.jpg": "66f19613398aa4ddd2bc4ffe54129424",
"assets/assets/images/grandhotel.webp": "2e3e0d5ddc588181109844298dfc1a54",
"assets/assets/images/grandhotel1.jpg": "9292f6afae35b1b15aad440e872762ac",
"assets/assets/images/grandroom1.webp": "3ae3729419e4195516741511a3f888b6",
"assets/assets/images/grandroom2.webp": "9c1ccc0623466043eb60bf0289bdad75",
"assets/assets/images/grandroom3.webp": "d5b306f278b3dd9c9ef82dac6b14d9fb",
"assets/assets/images/grandroomsweet.webp": "723f55aa684ba999610e423b6a8fd15c",
"assets/assets/images/grandrview.webp": "25555957b7692d1c2667b770c5d3945f",
"assets/assets/images/grandstorelogo.jpg": "7e3466f57bbd83e60d16d56b78c2e6a9",
"assets/assets/images/grandsweet2.webp": "831e2d0e38aa62dc79e7f8668f5c9873",
"assets/assets/images/grandsweet3.webp": "3202d0c724907cf603c895ce0ae41fdc",
"assets/assets/images/grandsweet4.webp": "cf31c0544c7d5318c35557fd080fb8bf",
"assets/assets/images/grandsweet5.webp": "6b3451a8ed0631499cdcb98514898714",
"assets/assets/images/grandsweetfamily1.webp": "09acfc3936b795502b608bea81f732d1",
"assets/assets/images/grandsweetfamily2.webp": "32ee0e9f1f6ad19eaa29593b5783bd0c",
"assets/assets/images/grandtibaprice.png": "69ce998c7e09fa1d477c011f4ae1f046",
"assets/assets/images/hallheader.jpg": "3880ea08a4042510ead73e98408bc0e9",
"assets/assets/images/halllogo.jpg": "6d0a069eb0a00d5cbbd4f97b4e64f418",
"assets/assets/images/hotellogo.jpg": "eff44bc46227e95f97057c5b91f54972",
"assets/assets/images/hrghadasinglee.jpg": "c0a3cced726774e56d678c53969badc0",
"assets/assets/images/hurghad3.jpg": "31a8d3ba6d2e1f3543c327a4c1f14353",
"assets/assets/images/hurghad5.jpg": "cb77a220f3308e73fb034568ff2754a0",
"assets/assets/images/hurghada1.jpg": "46344aabb97226ad1a11e6117c40de13",
"assets/assets/images/hurghada2.jpg": "210046dabae5570977dcb61cdb40732a",
"assets/assets/images/hurghada4.jpg": "56eff60ce1420476a291cfb1eec5d9a4",
"assets/assets/images/hurghada6.jpg": "9d31d383a1dacf3a1ff356fb08744c5f",
"assets/assets/images/hurghadaactivitylogo.jpg": "8a8a9441a268f448b1a2d9350aa701f0",
"assets/assets/images/hurghadadouble1.jpg": "4b442b0bec16e06341b316f1f8ce5753",
"assets/assets/images/hurghadadouble2.jpg": "fb2716f05e02f6979aa3b973f8c8017f",
"assets/assets/images/hurghadadouble3.jpg": "8ff29039c9999703d3c5526d3ced50e6",
"assets/assets/images/hurghadadouble4.jpg": "af4c8622579711f5784c3d969afa9ed5",
"assets/assets/images/hurghadalogo.jpg": "bdb40671e1525f2f047b2c91b8e3660b",
"assets/assets/images/hurghadapool.jpg": "e3f8468e817d14af70c12d33b6d28828",
"assets/assets/images/hurghadapoolcafe1.jpg": "75d831d9cce871f5967a7e7bb6371956",
"assets/assets/images/hurghadapoolcafe2.jpg": "1a0378888c13ae94e8a6a7a9e946833a",
"assets/assets/images/hurghadaresturant2.jpg": "d4b2ee0271b58b8faa3d9b34ae7f14f1",
"assets/assets/images/hurghadaresturant4.jpg": "48806c586ed632003f0db6efb9ef2932",
"assets/assets/images/hurghadaresturant5.jpg": "e94d2b956c5f4641d83d930ab759d4af",
"assets/assets/images/hurghadaresturantlogo.jpg": "f89d046e389c97efadcabc0031dc6912",
"assets/assets/images/hurghadasafari.jpg": "3cb477e91a6b17a1990fa7175217fb20",
"assets/assets/images/hurghadasingle2.jpg": "5bf2fa08091c95dc9374a7397ffd5f02",
"assets/assets/images/hurghadasweet2.jpg": "24c5f1e3d6ced90785acb25730de3c7c",
"assets/assets/images/hurghadasweet4.jpg": "33de2ded2b74ee8a3c85c4388d7d82a4",
"assets/assets/images/hurghadatrible1.jpg": "695d2453d5225d4aab76fce4c0aa3168",
"assets/assets/images/hurghadatrible2.jpg": "9561b0ba5d2f1c1bace174915343ad4b",
"assets/assets/images/hurghadresturant.jpg": "942b5d536f7b8089947e95426f377a16",
"assets/assets/images/hurghadsingle1.jpg": "b7e17a24b9c6174218dd9b0dcae8479d",
"assets/assets/images/hurghadsingle2.jpg": "e4600208fb6566cbb3c7e0ad1b1aae5a",
"assets/assets/images/hurghadsingle3.jpg": "dfefed0fc04cb1a1fdbbd3c09613f9a9",
"assets/assets/images/hurghadsweet1.jpg": "d5bb80df1968acddd472dfdffe4b10ce",
"assets/assets/images/hurghadsweet3.jpg": "9ae88394f710fbb02553fef32a57dfd4",
"assets/assets/images/IMG_20250326_145752.jpg": "fca224205c45c4dc1a67c55e3402a542",
"assets/assets/images/italiano1.jpg": "22e7397c9f217cadfa5314c92ee14590",
"assets/assets/images/italiano2.jpg": "33b071543d3b4c24bef698c9b5ab8820",
"assets/assets/images/italiano3.jpg": "9a934975e80e3bb481842af247e839bf",
"assets/assets/images/kamila.mp4": "834493fc683424c35118eda453cef4a1",
"assets/assets/images/karate1.jpg": "0a6e10331feb0a48fa846501918c2c8c",
"assets/assets/images/kidsare2.jpg": "be048b4bb9e90667b7462d0f01712f04",
"assets/assets/images/kidsarea1.jpg": "01dadac0d5c6da000381f074259f6674",
"assets/assets/images/kidstiba1.jpg": "d87de0444e870b79623f3a39777bf067",
"assets/assets/images/kidstiba2.jpg": "1aacdf0570fea7239ea4761c7ff5f57e",
"assets/assets/images/kidstiba3.jpg": "eaa6c8baed48f94dc701a2159eaab7da",
"assets/assets/images/kikbox.jpg": "997776452fce62d7ebfdfaf457cdb1b6",
"assets/assets/images/lagoonaqua1.jpg": "7342a0a0c6e0475dc9b94dc34b34aa7a",
"assets/assets/images/lagoonaqua2.jpg": "c22bfff10550f2e9f270235c941edf04",
"assets/assets/images/lagoonaqua3.jpg": "b95439b3af8e42703ef90ac3cf29f5ca",
"assets/assets/images/lagoonchalet1.jpg": "b4029530fc1bc887b3cba7d52ebb4b3c",
"assets/assets/images/lagoonchalet2.jpg": "008b97647c5d4dccc91888d2cde74c45",
"assets/assets/images/lagoonchalet3.jpg": "728b7634e63bd0042a0d93a1cb4d01e2",
"assets/assets/images/lagoonchalet4.jpg": "610b3794350ff7d9c3d36f6c92067d14",
"assets/assets/images/lagoonhotel.jpg": "c4ee6ef8c492ef3b1c864428638b7559",
"assets/assets/images/lagoonmain.jpg": "9a136f58e8dc08d6d588bdbd903f38e6",
"assets/assets/images/lagoonmain2.jpg": "1c47fa5cbcf1df719b468c2f95acb34c",
"assets/assets/images/lagoonmain3.jpg": "f0742e41d6acd88ab5cc0a668694e1b6",
"assets/assets/images/lagoonmain4.jpg": "f94069b8760c3c0c91517ec0c657c405",
"assets/assets/images/lagoonmain5.jpg": "6cc4e4e4e87e17a4adeb959020d163ea",
"assets/assets/images/lagoonmain6.jpg": "c5f800390201a1d78a8d785863f48155",
"assets/assets/images/lagoonmain7.jpg": "151d7933cc64db89dbcaa4ca06a2318b",
"assets/assets/images/lagoonroom1.jpg": "227a523c2234d08357ccdbb833d586a7",
"assets/assets/images/lagoonroom12.jpg": "5ad1b1d00e955bb126bcc34e18225afd",
"assets/assets/images/lagoonroom13.jpg": "21644867e9b3869aafdb2fe8e543877c",
"assets/assets/images/lagoonroom14.jpg": "2d24413318cf1bddb62f10b25b643b66",
"assets/assets/images/lagoonroom15.jpg": "85d8e2918e39a331c7bb83a4701a1807",
"assets/assets/images/lanahallll.mp4": "3fc5c000827e00130f4b87686fd4dc66",
"assets/assets/images/larosehall.mp4": "d24547ff57ea331df71b5c253bec2b98",
"assets/assets/images/lavndolarest2.webp": "2b698bfefeba04b625b7367b964ed9c6",
"assets/assets/images/lavndolarest3.webp": "d82642eae50b27b52b493a811cc5b8c3",
"assets/assets/images/lelehall.mp4": "ed446350dc982d853c244a9962a01160",
"assets/assets/images/location.png": "90b29fc2b7b9468d0ea42fde23ccf456",
"assets/assets/images/logo2025newww.png": "ada11358b281f4096d122a4f70f18145",
"assets/assets/images/lvndolahall.mp4": "1553d834b9d3a0bb5cf1ab4b4f29dfad",
"assets/assets/images/lvndolapool1.jpg": "b332bbde723e6c22bc90fdaac26f703e",
"assets/assets/images/lvndolapool2.jpg": "ddb65f97c0506b17245cbbefa57a342b",
"assets/assets/images/lvndolaresturant1.jpg": "59d95d84e3a276ea9ade194006c6c005",
"assets/assets/images/lvndolaroom1.jpg": "bf83d81fd893cf8c46e4b3c45cb96b5d",
"assets/assets/images/lvndolaroom2.jpg": "6cdab7d688025b7de5cb67326e30ad5d",
"assets/assets/images/lvndolaroom3.jpg": "7501d47603bd4bdf19e636fdcc2c8b85",
"assets/assets/images/lvndolaroom4.jpg": "48fbf14725ab745a35952e7b1d001c20",
"assets/assets/images/lvndolashalih1.webp": "72033c02f7a403886fad6769dfed11d5",
"assets/assets/images/lvndolashalih2.webp": "ecb9272eaa451b1025dd3fd354aeefca",
"assets/assets/images/lvndolashalih3.webp": "ff911ec7b126087e891fb8cf63f03bce",
"assets/assets/images/lvndolashalih4.jpg": "2e14a498dab87ce5a50a3031acaf0396",
"assets/assets/images/lvndolashalih5.jpg": "85ec4f48188c572b2002a1116f167846",
"assets/assets/images/lvndolashalih6.jpg": "d0120fca52821458f7d6322692570cbf",
"assets/assets/images/lvndolasweet1.jpg": "73d0f7f1da61219ab07721db1e21ee2b",
"assets/assets/images/lvndolasweet2.jpg": "2bbc8ebcb0c833ce5aa44e0f43c7a0ee",
"assets/assets/images/lvndolasweet3.jpg": "13d538c7bceace9b510d8143c0251083",
"assets/assets/images/lvndolasweet4.jpg": "8805a9f9b0b4d79de26e6f5f121ebb12",
"assets/assets/images/m1.jpg": "4c8a05c5e2783290a1dbb28277043abf",
"assets/assets/images/m2.jpg": "060fcca42edc905d54d8291d00cee66e",
"assets/assets/images/marvelvideo.mp4": "c9b4d1af932cd8cea8985d622d6bc990",
"assets/assets/images/meetinghall1.jpg": "1378fb489d41052009aaaaef8cba4b38",
"assets/assets/images/meetinghall2.jpg": "c94c4325706ecc21873177c35d15a01c",
"assets/assets/images/meetinghall3.jpg": "9f20ae42cda501ebd21b01067448a777",
"assets/assets/images/meetinghall4.jpg": "e97fdc77d39993a3a27e220124af7588",
"assets/assets/images/mik1.webp": "8d034846a5503e1fb6cf2388b1d2d6d8",
"assets/assets/images/mik2.webp": "e71c89d3a88e431cfd19a28ecec1ba95",
"assets/assets/images/mik3.webp": "4b843c1628cb005200235cfbbe65668e",
"assets/assets/images/mike4.webp": "874f76d2bfbffb10647c3db62f884442",
"assets/assets/images/mike5.webp": "6d3cbc06735a362f3defc3dd3a0184a7",
"assets/assets/images/mike6.webp": "ee5643256bb4939e038d577acc47ff27",
"assets/assets/images/minizoo1.jpg": "9ff553c6b35b650b15e22f75ce0ad9b2",
"assets/assets/images/minizoo2.jpg": "270a660437fa3e3bbee59dca0898bd33",
"assets/assets/images/minizoo3.jpg": "8f2f0597d585792f72b2454846e6d603",
"assets/assets/images/minizoo4.jpg": "ffd3c5a0d043da5e0c169a3e5b1e3f02",
"assets/assets/images/minizoo5.jpg": "e3fb52f311049d880c3134c2e720e6b2",
"assets/assets/images/minizoo6.jpg": "1cdc4d0637b3d50e9c5f09c1f616aa6a",
"assets/assets/images/minizoo7.jpg": "a62cc88182ed310110ddb30c600853c2",
"assets/assets/images/minizoo8.jpg": "8402a4e1acfa799b3a09fc2a1fd086ae",
"assets/assets/images/minizoologo.jpg": "81c456a2f0ae6e2680027274f12be4bf",
"assets/assets/images/minizooo1.jpg": "ce232f6053f7ae25c050a071de8e18c6",
"assets/assets/images/minizooo2.jpg": "5f5300da3184acd7af13b4d99a9188dc",
"assets/assets/images/minizooo3.jpg": "0cd01256063dcc4efe345c8aef2f2e4f",
"assets/assets/images/minizooo4.jpg": "c8412ee6c8973e3216cb2dfe2016ecfe",
"assets/assets/images/nanees.jpg": "50b98dec16c7f78c60c650dbee4786a5",
"assets/assets/images/newblue1.jpg": "754edce7c059230c6927269fde7f4b9b",
"assets/assets/images/newblue2.jpg": "f2471097c45413ee020db9c26eef053f",
"assets/assets/images/newblue3.jpg": "8a2fb6de2ee626b0b12b6b8691b7ed7a",
"assets/assets/images/newchalet11.webp": "833d0cece655c98bd97b1fe1304e53b2",
"assets/assets/images/newchalet2.webp": "21f5c4843641e7f16aeaa613bf2f5eb3",
"assets/assets/images/newchalet3.webp": "c71bf71789797ac676cdf8a833994301",
"assets/assets/images/newchalet4.webp": "22226fc41415edb7c63a707712d52a43",
"assets/assets/images/newchalet5.webp": "c2b595ea73c70c92ee2be62c11d0f9bb",
"assets/assets/images/newchalet6.webp": "a768c88b4136ea880193c5b2aab556dc",
"assets/assets/images/newchalet7.webp": "016faa4fda54c8d8eecabcb715f8a267",
"assets/assets/images/newchalet8.webp": "f55df0696dcbebfd281411b501bc6ac3",
"assets/assets/images/newchalet9.webp": "2c2feb5043e7e3619b399432e89d2b64",
"assets/assets/images/newmarvel1.jpg": "5d72d8b35d7c8cfef34037d532235936",
"assets/assets/images/newmarvel2.jpg": "4368b67a4adfc7af4f4d3f52e86d702b",
"assets/assets/images/newmarvel3.jpg": "870913f8958ed28b3d529b78a16be25d",
"assets/assets/images/newmarvel4.jpg": "7d554c05f3dc5671d62727538c0d61d1",
"assets/assets/images/newmarvel5.jpg": "25879af098913616c5ef6252dc36c462",
"assets/assets/images/newmarvel7.jpg": "f44492b36bb6a8ceedd5ded47907efc0",
"assets/assets/images/north.jpg": "cb2c0819e9ca5d12c9b1de2ff143b224",
"assets/assets/images/north1.jpg": "927f2bc77f5e8b5bc1616840a0cf73d5",
"assets/assets/images/north2.jpg": "d4175f4a69dba1cc880087d47a6f47cd",
"assets/assets/images/north3.jpg": "f4266234fbca2aed28f50a8310166d58",
"assets/assets/images/north4.jpg": "73deb5f46cde8f33aad4ecadab231683",
"assets/assets/images/northcostlogo.jpg": "776634a2a1196b6518a9f6495d4206e0",
"assets/assets/images/northgym.jpg": "daef83a2dbe341a25c8feffa2907d421",
"assets/assets/images/northhotel.jpg": "690b60009144abe712f1a78b6453e5f7",
"assets/assets/images/northmain.jpg": "28b9350d9cb4232c4f24c765b8d02b96",
"assets/assets/images/northrestaurant.jpg": "400571e216045dc226b5e22d17230d47",
"assets/assets/images/noth5.jpg": "d9479f5c7932c2912a52ba1e9eb47b5e",
"assets/assets/images/nsfolempy.jpg": "82cdbeda40206cdd3e164255d123c9e7",
"assets/assets/images/oo.jpg": "04cb4603bf88c99bae050d51fca89053",
"assets/assets/images/orkeed.mp4": "112cafb005cad0b7e327cda73c416193",
"assets/assets/images/ovalpool.jpg": "cec9b96907365c4f01800d97821ae08d",
"assets/assets/images/paradise.jpg": "9171d2c28855b04eb9839a9c78213ce2",
"assets/assets/images/paradise1.jpg": "7e265752c94e615b96fbbf6f6b19dbb8",
"assets/assets/images/paradise2.jpg": "cea57a0118aa9ea81bda2fd2ce889706",
"assets/assets/images/paradise3.jpg": "134eafe20abba79aaf0135579e66d59c",
"assets/assets/images/paradisepool1.jpg": "cea57a0118aa9ea81bda2fd2ce889706",
"assets/assets/images/paradisepool2.jpg": "9171d2c28855b04eb9839a9c78213ce2",
"assets/assets/images/paradisepool3.jpg": "7e265752c94e615b96fbbf6f6b19dbb8",
"assets/assets/images/photo1.jpg": "254398c7491bc4ac76829205bbbc57f2",
"assets/assets/images/photo2.jpg": "0e444702e1b95627fe9d04ab1e167b24",
"assets/assets/images/photo5.jpg": "8a47ea5e5f5f7067bc165514ce917207",
"assets/assets/images/photologo.jpg": "4b6017e6551f82b7be067d124a3d7f81",
"assets/assets/images/photosession.jpg": "222fd6a595bce1394a5e0fb9f466a415",
"assets/assets/images/photosession1.jpg": "c385c7004534e52eab4e2887cc99aaf4",
"assets/assets/images/playzonelogo.jpg": "3725c5d7aa90fbd78ba681963bc44762",
"assets/assets/images/plazaclub.JPG": "f538426fa7d1734dbbaded0a0c5c3dd7",
"assets/assets/images/plazagarden1.jpg": "82a890036163a522a1ddf5dcc0afc699",
"assets/assets/images/plazagarden2.jpg.jpg": "4d0c6d7421e31e1ea666626e903205d9",
"assets/assets/images/plazagym1.jpg": "8002696d916b507f75853ab201e55514",
"assets/assets/images/plazagym2.jpg": "9ca1d7cf7e394ab41af217ef047b5006",
"assets/assets/images/plazagym3.jpg": "a82c80d44f709e5f52a4a84af8e4a7cf",
"assets/assets/images/plazagym4.jpg": "36cafd7b193099737bae0c54fb288dfc",
"assets/assets/images/plazagym5.jpg": "0e770abf143502f52559f5f9c8652b07",
"assets/assets/images/plazagym6.jpg": "131211bcbce94797c4222e430435f6e5",
"assets/assets/images/plazahotel1.jpg": "769fef917b026a64c9758728fc2bd31a",
"assets/assets/images/plazaohotosession2.jpg": "84ff0c7424a4937b600496e2a55d1e8c",
"assets/assets/images/plazaohotosession3.jpg": "1c3a9c8c9206e63da80ae9c2c732f776",
"assets/assets/images/plazaohotosession4.jpg": "0e2ff9d25732f4dec1df9e20e462f93a",
"assets/assets/images/plazapool2.jpg": "20942a531e9a2ef109632749c125ab5b",
"assets/assets/images/plazapool3.jpg": "58d2d2adbfe67fb03a9d02d4c5c51a2a",
"assets/assets/images/plazaresturant1.jpg": "f3a28d04ec7e9df326e8278325c83867",
"assets/assets/images/plazaresturant2.jpg": "26dd4022d72dc7c7b36b03315e6d4492",
"assets/assets/images/plazaresturant3.jpg": "0fdab7db5098eb97f1c881d18dbd9bc1",
"assets/assets/images/plazaroom1.jpg": "71c6be3c08c9ab312ee01f97de257dc4",
"assets/assets/images/plazaroom1.webp": "361d3494bae5482ce0e790abe22fad06",
"assets/assets/images/plazaroom2.jpg": "122113d345226b1b85c87459195449eb",
"assets/assets/images/plazaroom3.jpg": "420de7452ca61aac4517b6270e26befa",
"assets/assets/images/plazaroom4.jpg": "84b6171043ada53173e14a473f111346",
"assets/assets/images/plazaroom5.jpg": "1a0b37d1fcc11cc10dd008d55f38a326",
"assets/assets/images/plazhotel3.jpg": "58e328da1a9a720e8757624ebc26720d",
"assets/assets/images/pricee.jpg": "a5cc1ebedee5592007a3324f63814f0e",
"assets/assets/images/ramdan.png": "7e5ffaed9061f763a0933fc910d977cd",
"assets/assets/images/reiveraroofcafe1.jpg": "76b12cde0f19137a54a20ef5cc34ed94",
"assets/assets/images/reiveraroofcafe2.jpg": "3c228bba2cebf1daa43997a32da63a56",
"assets/assets/images/reiveraroofcafe3.jpg": "9966b68bc61fdec3d3f41fb71dd6efd5",
"assets/assets/images/reiveraroofcafe4.jpg": "231ffdf1a4d4feeda233f7282691fce0",
"assets/assets/images/restaurantheader.jpg": "ea99ce318a0cb2d9dbb54bac5a1b1b2d",
"assets/assets/images/restaurantlogo.jpg": "8974613a92a94f0e3d95e25ef8032746",
"assets/assets/images/reveiraresturant2.jpg": "3f7167ee34b399ef9ef21662d3e9dc7f",
"assets/assets/images/reveiraresturant3.jpg": "347e8f3b744ad6d6af51fea4fd8138cb",
"assets/assets/images/reveiraresturant4.jpg": "1a61953776906ede1122504fc44a1dc7",
"assets/assets/images/reveiraresturant5.jpg": "7b2e69a92761f4cb3c4d17cafdd19851",
"assets/assets/images/reveiraresturant6.jpg": "cea8c272cead5bae6c726259115b5227",
"assets/assets/images/revierachalet1.jpg": "b3b7e6cd0a6db420d2e9a35d29c0a722",
"assets/assets/images/revierachalet2.jpg": "6c0c2a1fba51ae0afee48a6efdd17829",
"assets/assets/images/revierachalet3.jpg": "638badb59fc720bdf349a17665cc827c",
"assets/assets/images/revierachalet4.jpg": "3c7cea50ae149125a2a1d17bb6ff033a",
"assets/assets/images/revierachalet5.jpg": "d563bd34d5ce2cdc50118767787f7637",
"assets/assets/images/revierachalet6.jpg": "9473b42961581c8685727017f1533233",
"assets/assets/images/revieradoubleroom1.jpg": "75f8de37b08a0ad5fe56afc086d2052d",
"assets/assets/images/revieradoubleroom2.jpg": "537a382b92a16b5ed420eb917f1d9a1a",
"assets/assets/images/revieradoubleroom3.jpg": "b217dc92d894ebd4b59f264d2fb42259",
"assets/assets/images/revieradoubleroom4.jpg": "187f0aaabbc0ef2d69a8786ad82deee2",
"assets/assets/images/revieradoubleroom5.jpg": "57982433cc4619c9eb5bbcd3f1336d10",
"assets/assets/images/revieradoubleroom6.jpg": "0744741f850b74c1039523bd6454c4a0",
"assets/assets/images/revierafamily1%2520.jpg": "4cf10749cceb2d5fede0c54e8cd3d456",
"assets/assets/images/revierafamily2.jpg": "ffcf05531635c8f7200e3885cf735914",
"assets/assets/images/revierafamily3.jpg": "b0ab8a61b56ce9904235715adb4d02ae",
"assets/assets/images/revierafamily4.jpg": "c1c5f6b05b34bc7597642c0d684f400d",
"assets/assets/images/revierafamily5.jpg": "bc9441689f8e566f60f8be5e1c2e9b58",
"assets/assets/images/revierafamily6.jpg": "4d143dc9c0976431be3dc2ba23ba9181",
"assets/assets/images/revierafamily7.jpg": "021282f126296715fc5582d914c3a508",
"assets/assets/images/revierafamily9.jpg": "22b860317e91c6610f3da95d422f9bd0",
"assets/assets/images/revierahotel1.jpg": "932712d3b627d5bd6eb0b5cc53b8a8cd",
"assets/assets/images/revierahotelmain1.jpg": "b5f8087157caa27857142a025d75fbe3",
"assets/assets/images/revieramain1.jpg": "3fd49df965903b0401dbd1080c0685bd",
"assets/assets/images/revieramain4.jpg": "2274f7d3a42db695b33ab1d367090d82",
"assets/assets/images/revieramainbeach.jpg": "da782a1bda9466ba61dc9b4dda2c4352",
"assets/assets/images/revieramainbuffeh.jpg": "58789470821151891c597cb6b23f4108",
"assets/assets/images/revieramainreception.jpg": "3e5a943f2475fc21f697005c7f49c390",
"assets/assets/images/revieramainview.jpg": "e0ff6b9e6fe14821f47cebbe528eff85",
"assets/assets/images/revieraresturantm1.jpg": "912d938e63a63e396270f54302e3a89b",
"assets/assets/images/revieraresturantmain1.jpg": "7d5f76d5cd2d511194a3a2aebabd9372",
"assets/assets/images/revieraroyal1.jpg": "07467ffe2b0e45926228347b3cb1061e",
"assets/assets/images/revieraroyal2.jpg": "29b575f65df608d5547dd993d805f6cf",
"assets/assets/images/revieraroyal3.jpg": "b325c0a56941754117e0984c15cd31fb",
"assets/assets/images/revieraroyal4.jpg": "ec755dea915eb3bb28253fd9546bbf6e",
"assets/assets/images/revieraroyal5.jpg": "dfe8281b43fc496f8fbf1dc304e515e4",
"assets/assets/images/revieraroyal6.jpg": "c73724a1dc0275511cf0cb7c24174e36",
"assets/assets/images/revieraroyal7.jpg": "5a7b3642b35f21ca600e9210bfa04b41",
"assets/assets/images/revieraroyal8.jpg": "cfd8b2ca0c802196876e84661e1d3c85",
"assets/assets/images/revieraroyal9.jpg": "19c7dc5f4cd72b804bf90d96b99830d1",
"assets/assets/images/safina.jpg": "b8742e11a3fc40899436ba56720a8cb4",
"assets/assets/images/safina1.jpg": "6a44764978ff4911b09106c9190eb689",
"assets/assets/images/safina2.jpg": "97eb3b2c9ca7a996d59cfedbf07e1f05",
"assets/assets/images/san3s3ada1.jpg": "1f1d508730dbe47cc79655c9e0ac6d7f",
"assets/assets/images/selema.jpg": "b6d70999c7e22f66d9d4da73465c52e1",
"assets/assets/images/shalih1.jpg": "5e86fd83ee13ffeea8d010688c893994",
"assets/assets/images/shalih1.webp": "e686886e8ffa00b86aad07cb9c1b9239",
"assets/assets/images/shalih2.jpg": "d9939e747afe6428de121e4d8c0be583",
"assets/assets/images/shalih2.webp": "00de987a35bcc06ced16d9e6b7ac42ad",
"assets/assets/images/shalih3.jpg": "b9456ae075bf691b054e40f2a60159fd",
"assets/assets/images/shalih3.webp": "9d4756223713004a57163474aaa0e766",
"assets/assets/images/shalih4.jpeg": "9058e8538566dd649275bfcbfcda3ea0",
"assets/assets/images/shallihnorthcost.mp4": "d460c4394cbf76c19d3fd816615e2183",
"assets/assets/images/socialmeeting1.jpg": "1c8aac7ee67f8b9175f97013ba0bbd67",
"assets/assets/images/socialmeeting2.jpg": "e6bccca9341eb94ab36ada80a5b2671d",
"assets/assets/images/socialmeeting3.jpg": "4dc2db2e8cd3537fbf7ff3d5f4250621",
"assets/assets/images/subs.jpg": "27b5017fb3291f078028a3b5f8a29364",
"assets/assets/images/subslogo.png": "2774033fefc4d0068fed9256bba114d5",
"assets/assets/images/sweet1.webp": "b745961cbf4f6a03fd3a8a44abae0dc9",
"assets/assets/images/sweet2.webp": "486e1902df0b6ff6eb015d369c15a3d2",
"assets/assets/images/sweet3.webp": "0597115ec0d4d2a7cf827463604701aa",
"assets/assets/images/sweet5.webp": "f5079c6c3c97bf81af2ce5a6e5687072",
"assets/assets/images/swimmingtibarose.jpg": "39d6ec23aa92ccc96380843f6c7b53a8",
"assets/assets/images/swimmingtibarose1.jpg": "be8dae7af7cdf6fc8a09864bbda01ca0",
"assets/assets/images/t1.jpg": "eff44bc46227e95f97057c5b91f54972",
"assets/assets/images/t2.jpg": "eff44bc46227e95f97057c5b91f54972",
"assets/assets/images/t3.jpg": "2d12d00063aff4a77e469fe4992a7420",
"assets/assets/images/tagkj.webp": "bbc70282c8d170f561f3e6c41454c7db",
"assets/assets/images/tagmohalllogo.jpg": "e4f6fa7ad82b93ba71f949e4a11e1507",
"assets/assets/images/tagmokidsarea1.jpg": "752e51abfdbb110c7e82a05310b7e26a",
"assets/assets/images/tagmokidsarea2.jpg": "8e8e968c19660845f195c9fcc2df1950",
"assets/assets/images/tagmokidsarea3.jpg": "0122ad1e147807a7f25ccf1a65181828",
"assets/assets/images/tagmokidsarea4.jpg": "2a82445059946f856d0941f618b485d2",
"assets/assets/images/tagmokidsarea5.jpg": "d102a5eeaa595fb8e2c8d48eaaca2205",
"assets/assets/images/tagmooactivitylogo.jpg": "59fafa47696ac90cbfa1f267aee8a5cb",
"assets/assets/images/tagmoobasketball1.JPG": "ae3d1bea193b1ab64cbb1cda414b3d01",
"assets/assets/images/tagmoobasketball2.JPG": "da2db626deb9322a9248275db3a441fe",
"assets/assets/images/tagmoofootball.JPG": "c8de292b1918a1689e4c83a2200e2b45",
"assets/assets/images/tagmoopadelteneis.webp": "f38f131f4855f2b78fa6e0c5d6aa30dd",
"assets/assets/images/tagmoophotologo.jpg": "84ff0c7424a4937b600496e2a55d1e8c",
"assets/assets/images/tagmooplaza1.jpg": "c7f5c20d750ee2903a31847efe8941cf",
"assets/assets/images/tagmooplaza1.webp": "1e4279929cb9928304ea8d72f86b8807",
"assets/assets/images/tagmooplaza2.jpg": "d17cadff52f32e8b87de79601dee598d",
"assets/assets/images/tagmooplaza2.webp": "d82807354ecfd224f5b6e6896169529b",
"assets/assets/images/tagmooplaza3.jpg": "ecdd4e821fbc47c01650040d582fd7de",
"assets/assets/images/tagmooplaza3.webp": "335fe910dd9768d4c246e62c0bbdecce",
"assets/assets/images/tagmooresturantlogo.jpg": "166669305a37ef527253f9a80c1e6bac",
"assets/assets/images/tagmootennis.JPG": "2a15412119b379f4e163de1b3451ec0d",
"assets/assets/images/tagrest.webp": "751cd032653c50712b74689ea371de13",
"assets/assets/images/take.jpg": "c88db1cdfca90e1bd9d87c455eaf5ba4",
"assets/assets/images/take1.jpg": "8c04a01a26b7ce7246e54845e06dea2d",
"assets/assets/images/take2.jpg": "f22b3160d2e127eebc033efbaad72ec3",
"assets/assets/images/take3.jpg": "1e5af7c8c7b462f7bcf43817482eb538",
"assets/assets/images/tennistag.webp": "dcbab44341f051bbd760ce9d987fa846",
"assets/assets/images/tiba1.jpg": "32aa79d9c7d01c7f3ff31c4ef5e344ae",
"assets/assets/images/tiba2.jpg": "b36536006365797160e345a41225b3e4",
"assets/assets/images/tiba3.jpg": "16a8666e65b8e1c9bc05b16dcedd1b56",
"assets/assets/images/tiba4.jpg": "64e487619f044843664f772f2ae84f45",
"assets/assets/images/tiba5.jpg": "1ba07872fc2d8e9e2458bc82afec88fd",
"assets/assets/images/tiba6.jpg": "6f7b167fcc05217b18ee5f5246f6cb76",
"assets/assets/images/tibaroom1.webp": "74c4c31c75f5c70901dcdd758033ef83",
"assets/assets/images/tibaroom2.webp": "6c66aac3a49683c0b57539d6848e9412",
"assets/assets/images/tibaroom3.webp": "2b7915f272592f5949d8429669c065cc",
"assets/assets/images/tibaroom4.webp": "d89242d7f72f9d61b2aa536ba5d4e22b",
"assets/assets/images/tibaroom5.webp": "e302e3492ec0dcd78e4ca17a09ae54b5",
"assets/assets/images/tibarose1.jpg": "b323967d34d5856269310857089641bd",
"assets/assets/images/tibarose10.jpg": "ce67f3706ae82f85db26de8844abd9d1",
"assets/assets/images/tibarose11.jpg": "8bca9438c659820350dbecf392a5f9cf",
"assets/assets/images/tibarose2.jpg": "eb3f8e4d0686ebdd4042de9496a777bf",
"assets/assets/images/tibarose3.jpg": "222fd6a595bce1394a5e0fb9f466a415",
"assets/assets/images/tibarose4.jpg": "6f7b167fcc05217b18ee5f5246f6cb76",
"assets/assets/images/tibarose5.jpg": "cd433608877572cd32f57638e493447d",
"assets/assets/images/tibarose6.jpg": "2dfde197d612a2e0a08aebf62a77b388",
"assets/assets/images/tibarose7.jpg": "11de3fc547b40cf279d17540cb051cb1",
"assets/assets/images/tibarose8.jpg": "4f953436627f13af1c7f2983d5f41459",
"assets/assets/images/tibarose9.jpg": "72ab261166bed9b60a5fdc1d0ec58403",
"assets/assets/images/tibaroseprice.png": "f9c4cb8e733f0bb63d72aca01b0733a5",
"assets/assets/images/tibasweetfamily1.webp": "ba9b98ed6c249b7401a18aeb8caf4665",
"assets/assets/images/tibasweetfamily2.webp": "8a64cc76e4d519821722e981aeedc8f2",
"assets/assets/images/tibasweetfamily3.webp": "bc8787d8179ff65bac2eac642d877ccb",
"assets/assets/images/tibasweetlux1.webp": "a7252e1aea66cb00dd90e919ce9deee9",
"assets/assets/images/tibasweetlux2.webp": "22a69d38c0774afbb4b93feb19d95070",
"assets/assets/images/tibasweetlux3.webp": "377a46a785d8317b090c7354a595c7a9",
"assets/assets/images/tibasweetlux4.webp": "01e6f1d28ecdec3af7ead281a317fcfd",
"assets/assets/images/tibasweetlux5.webp": "8b93715aa6aa0b319cd75ac1939164c4",
"assets/assets/images/toleeb.mp4": "f686cbd6f097e09ead44bdcd294380f2",
"assets/assets/images/villarose.mp4": "0f7c7ca112ae17bf7a15fb78e5961505",
"assets/assets/images/vippp1.jpg": "b75b99964e43702a8cbb3c932b562cb4",
"assets/assets/images/vippp2.jpg": "ab6bee4f3e1ac6423be071e12fa2b90e",
"assets/assets/images/vippp3.jpg": "238f9211ca8e8714afcdef171835cffd",
"assets/assets/images/vippp4.jpg": "a8a87c7b00bf028f23354a930c6e1b2a",
"assets/assets/images/yummy.jpg": "5928eadc358570bc41b0977fc48a0677",
"assets/FontManifest.json": "2b52acee7bee9f34d372a965ef37754f",
"assets/fonts/MaterialIcons-Regular.otf": "32cb58c70ecfc0275cf7fd08b9dce9fb",
"assets/NOTICES": "55701dc1607935ebf9a6e689222528b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e88a813768d4ce89e11ff8ac79e6a3c6",
"icons/Icon-192.png": "28d419343b871cce35f76793bf7e5a2b",
"icons/Icon-512.png": "446c4be429da932d9b16e7ba0ef529ef",
"icons/Icon-maskable-192.png": "28d419343b871cce35f76793bf7e5a2b",
"icons/Icon-maskable-512.png": "446c4be429da932d9b16e7ba0ef529ef",
"icons/logo192new.png": "6436bac2e7f7d12360677a2228dda433",
"icons/logo512new.png": "6229cec2ca76ca23bb0d886a05db903a",
"icons/maskable-icon%20192.png": "098df4366ed618327fd9543f21093990",
"icons/maskable-icon%20512.png": "9776b72451d698136635fa770d326a84",
"index.html": "18e7a22173a8f5bc37e1a42f8a8da02a",
"/": "18e7a22173a8f5bc37e1a42f8a8da02a",
"main.dart.js": "7568eabf5f45a86803469197fea55737",
"manifest.json": "b76eaae43d947606fc4ed814afae050f",
"version.json": "2cc6335ab903da1b93e6f84a04a52514"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
