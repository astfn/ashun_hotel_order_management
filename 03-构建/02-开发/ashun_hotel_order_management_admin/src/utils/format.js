export function formatShowPrice(price) {
  return `￥${price}`;
}

export function formatShowOrderStatus(status) {
  switch (status) {
    case "success": {
      return "成功";
    }
    case "pending": {
      return "（取消订单）待处理";
    }
    case "cancel": {
      return "已取消";
    }
    default: {
      return "成功";
    }
  }
}

export function formatShowDuration(duration) {
  let { start, end } = duration;

  let endPreTxt = end.type === "morrow" ? "次日" : "";

  start = `今日${start.time[0]}时${start.time[1]}分`;
  end = `${endPreTxt}${end.time[0]}时${end.time[1]}分`;

  return `${start}~${end}`;
}
