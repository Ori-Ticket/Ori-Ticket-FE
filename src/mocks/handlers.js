// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/resource", () => {
    // 2. Return a mocked "Response" instance from the handler.
    return HttpResponse.text("Hello world!");
  }),

  http.post("/auth", () => {
    // Note that you DON'T have to stringify the JSON!
    return HttpResponse.json([
      {
        room_id: "room_1",
        participants: [
          { id: "customer_service", name: "고객센터" },
          { id: "eunchae", name: "은채" },
        ],
        messages: [
          {
            type: "text",
            text: "안녕하세요, 입금이 아직 안돼서 연락드립니다.",
            from: "eunchae",
            sender_name: "은채",
            to: "customer_service",
          },
          {
            type: "text",
            text: "안녕하세요. 고객님! 문의 주신 건을 확인해보니 PIN 번호 유효성 확인은 마쳤지만 구매자 분께서 아직 미입금 상태로로 거래 보류 중으로 확인됩니다. 또한 구매자 입금 확인 시 거래 보류 상태가 해제되며 관람 종료 시 고객님에게 최종 입금이 될 예정입니다. 구매자에게 연락 후 입금 확인 되는대로 재안내 드리겠습니다. 불편을 드려서 죄송합니다.",
            from: "customer_service",
            sender_name: "고객센터",
            to: "eunchae",
          },
          {
            type: "text",
            text: "빠른 답변 감사합니다. 그럼 입금 확인되면 관람 종료 후 저한테 돈이 들어오는건가요?",
            from: "eunchae",
            sender_name: "은채",
            to: "customer_service",
          },
        ],
      },
      {
        room_id: "room_2",
        participants: [
          { id: "taeyang", name: "태양" },
          { id: "eunchae", name: "은채" },
        ],
        messages: [
          {
            type: "text",
            text: "안녕하세요, 선물하기 보냈습니다.",
            from: "eunchae",
            sender_name: "은채",
            to: "taeyang",
          },
          {
            type: "image",
            from: "eunchae",
            sender_name: "은채",
            to: "taeyang",
            attachment: {
              type: "image",
              payload: {
                url: "/src/assets/img_chat_ex.png",
              },
              caption: "선물하기 이미지",
            },
          },
        ],
      },
      {
        room_id: "room_3",
        participants: [
          { id: "kitty", name: "헬로키티" },
          { id: "eunchae", name: "은채" },
        ],
        messages: [
          {
            type: "text",
            text: "안녕하세요, 입금이 아직 안돼서 연락드립니다.",
            from: "kitty",
            sender_name: "헬로키티",
            to: "eunchae",
          },
        ],
      },
    ]);
  }),
];
