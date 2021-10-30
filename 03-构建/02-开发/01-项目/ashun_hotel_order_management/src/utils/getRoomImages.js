import { roomTypeMapImages } from "@/common/local-data.js";

export function getRoomImages(roomType) {
  if (!roomType) return [];

  const types = roomType.split("/");

  return roomTypeMapImages
    .find((v) => v.type === types[0])
    .rooms.find((v) => v.type === types[1]).images;
}
