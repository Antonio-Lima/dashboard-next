import { HomeResponseType, NotificationType } from "@/@types";
import { api } from "../api";

export async function getHomeData(): Promise<HomeResponseType> {
  const { data } = await api.get("home/7a581b0e16b559ff9a9957");

  return data;
}

export async function getNotifications(): Promise<NotificationType[]> {
  const { data } = await api.get("notifications");

  return data;
}
