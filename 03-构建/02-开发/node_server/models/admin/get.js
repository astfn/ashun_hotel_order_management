const { ADMIN_COLLECTION } = require("./config.js");
const getCollection =
  require("../../config/mongoDbConnection.js").getCollection(ADMIN_COLLECTION);

const { getOrderByAdminIdAndType } = require("../order/get.js");
const { getNoticeByAdminIDAndType } = require("../notice/get.js");

exports.getAdmin = async function (phone) {
  try {
    const _col = await getCollection();
    const result = await _col.find({ phone }).toArray();
    const admin = result[0];
    console.log(admin);

    if (!admin) return null;

    console.log(admin);
    //cancelOrderList
    const cancelOrderList = await getOrderByAdminIdAndType(
      admin.phone,
      "cancel"
    );
    // noticeList
    const successNoticeList = await getNoticeByAdminIDAndType(
      admin.phone,
      "success"
    );
    const cancelNoticeList = await getNoticeByAdminIDAndType(
      admin.phone,
      "cancel"
    );
    const noticeList = { successNoticeList, cancelNoticeList };

    //数据拼接
    const showAdmin = {
      ...admin,
      cancelOrderList,
      noticeList,
    };
    return showAdmin;
  } catch (err) {
    throw "获取管理员失败";
  }
};
