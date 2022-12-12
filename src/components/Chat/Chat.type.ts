export interface ChatRoomInfo {
  roomName: string;
  roomKey: string;
  description: string;
  participants: number;
  maxParticipants: number;
  lastChatTime: string;
  lastChat: string;
  walkingTime: string[];
  unreadMesseges: number;
}
