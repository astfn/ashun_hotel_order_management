import { useEffect, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { updateAdminAction } from "@/store/admin/actionCreators.js";
import { getAdmin } from "@/services/admin";

//localStorage hook
export function useLocalStorange(key) {
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem(key));
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
}

//组件挂载时，将LocalStorange中的admin更新到store中
export function useUpdateStoreByLocalStorangeAdmin() {
  /* redux hooks */
  const dispatch = useDispatch();
  const { admin } = useSelector(
    (state) => ({
      admin: state.getIn(["admin"]),
    }),
    shallowEqual
  );

  /* 其它hook */
  const [localStorageAdmin] = useLocalStorange("admin");
  useEffect(() => {
    if (localStorageAdmin) {
      dispatch(updateAdminAction(localStorageAdmin));
    }
  }, [dispatch, localStorageAdmin, admin]);
}

//从dataBase更新到local storage中
export function useUpdateLocalStorangeAdminByDataBase() {
  //redux hooks
  const { admin } = useSelector(
    (state) => ({ admin: state.getIn(["admin"]) }),
    shallowEqual
  );
  //其它hooks
  const [, setLocalStorageAdmin] = useLocalStorange("admin");
  useEffect(() => {
    async function operation() {
      const newAdmin = await getAdmin(admin.phone);
      setLocalStorageAdmin(newAdmin);
    }

    if (admin.phone) operation();
  }, [setLocalStorageAdmin, admin]);
}

// //当store中的admin更新时，也同步到localStorage中
// export function useUpdateLocalStorangeAdminByStore() {
//   //redux hooks
//   const { admin } = useSelector(
//     (state) => ({ admin: state.getIn(["admin"]) }),
//     shallowEqual
//   );
//   //其它hooks
//   const [, setLocalStorageAdmin] = useLocalStorange("admin");
//   useEffect(() => {
//     setLocalStorageAdmin(admin);
//   }, [setLocalStorageAdmin, admin]);
// }

//未登录状态跳转到登录页
export function useOfflineJumpLoginPage(props) {
  //redux hooks
  const { admin } = useSelector(
    (state) => ({ admin: state.getIn(["admin"]) }),
    shallowEqual
  );
  //其它hooks
  useEffect(() => {
    if (!admin.phone) {
      props.history.replace("/login");
    }
  }, [props, admin]);
}
