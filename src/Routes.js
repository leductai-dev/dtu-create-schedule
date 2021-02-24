import React from 'react'
import Trangchu from './Pages/trangchu'
import TimKiemMonHoc from './Pages/timkiemmonhoc.js'
import ChinhSachThuTuc from './Pages/chinhsachthutuc.js'
import LichCuaToi from './Pages/lichcuatoi.js'
import NotFoundPage from './Pages/notfound.js'


const routes = [
    {
        path: '/trang-chu',
        exact : true,
        page: () => <Trangchu/>
    },
    {
        path: '/tim-kiem-mon-hoc',
        exact : false,
        page: () => <TimKiemMonHoc/>
    },
    {
        path: '/chinh-sach-thu-tuc',
        exact : false,
        page: () => <ChinhSachThuTuc/>
    },
    {
        path: '/lich-cua-toi',
        exact : false,
        page: () => <LichCuaToi/>
    }, 
      {
        path: '/:slug',
        exact : false,
        page: () => <NotFoundPage/>
    },
];

export default routes;
