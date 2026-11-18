// Idea templates: a one-line idea -> a short multi-beat scene with 2 characters.
// Beat tuple: [who('A'|'B'), line, emotion, gesture, move, intensity?]
// {A} / {B} are replaced with character names.
export const GENRES = {
  hamlet: {
    en: {
      names: ['Hamlet', 'Ghost'],
      body: [
        ['B', 'Hamlet… Hamlet. Look upon me.', 'tender', 'talk', 'enter'],
        ['A', 'Stay back! Angels and ministers of grace defend us!', 'afraid', 'gasp', 'away:B', 0.8],
        ['A', 'Be thou a spirit of health, or a goblin damned? Speak!', 'angry', 'point'],
        ['B', 'I am thy father\'s spirit, doomed for a time to walk the night.', 'sad', 'talk'],
        ['A', 'My father…? Alas, poor ghost.', 'sad', 'sad'],
        ['B', 'Pity me not. Listen well — I was murdered, foully, by one who now wears my crown.', 'angry', 'point', 'toward:A', 0.8],
        ['A', 'Murder! Tell me who, that I may sweep to my revenge!', 'angry', 'angry', 'toward:B', 0.95],
      ],
      end: [
        ['B', 'The dawn is near. Adieu, adieu… remember me.', 'sad', 'talk', 'exit'],
        ['A', 'I will. I swear it, upon my life.', 'proud', 'kneel'],
      ],
    },
    zh: {
      names: ['哈姆雷特', '鬼魂'],
      body: [
        ['B', '哈姆雷特……哈姆雷特。看着我。', 'tender', 'talk', 'enter'],
        ['A', '退后！天使与神明，请保佑我们！', 'afraid', 'gasp', 'away:B', 0.8],
        ['A', '你是善良的精灵，还是该死的妖魔？说话！', 'angry', 'point'],
        ['B', '我是你父亲的灵魂，注定在黑夜里徘徊。', 'sad', 'talk'],
        ['A', '父亲……？可怜的亡魂。', 'sad', 'sad'],
        ['B', '不要可怜我。听好了——我被人害死了，凶手如今戴着我的王冠。', 'angry', 'point', 'toward:A', 0.8],
        ['A', '谋杀！告诉我是谁，我要立刻复仇！', 'angry', 'angry', 'toward:B', 0.95],
      ],
      end: [
        ['B', '天快亮了。再见，再见……记住我。', 'sad', 'talk', 'exit'],
        ['A', '我会的。我以生命起誓。', 'proud', 'kneel'],
      ],
    },
  },
  ghost: {
    en: {
      names: ['Alice', 'Ghost'],
      body: [
        ['B', 'Do not be afraid… I only want to be heard.', 'tender', 'talk', 'enter'],
        ['A', 'Who… who is there?!', 'afraid', 'gasp', 'away:B', 0.8],
        ['B', 'I lived in this house long before you. I never found rest.', 'sad', 'talk'],
        ['A', 'Why are you still here?', 'contemplative', 'talk'],
        ['B', 'A letter. I hid it under the stage, and I never sent it.', 'sad', 'sad'],
        ['A', 'Then I will find it. I promise.', 'proud', 'proud', 'toward:B'],
      ],
      end: [
        ['B', 'Thank you. Now I can finally leave.', 'tender', 'bow', 'exit'],
        ['A', 'Goodbye… and sleep well.', 'sad', 'wave'],
      ],
    },
    zh: {
      names: ['小雨', '幽灵'],
      body: [
        ['B', '别怕……我只是想有人听我说话。', 'tender', 'talk', 'enter'],
        ['A', '谁……谁在那里？！', 'afraid', 'gasp', 'away:B', 0.8],
        ['B', '在你来之前，我就住在这座剧院里。我一直没能安息。', 'sad', 'talk'],
        ['A', '你为什么还不离开？', 'contemplative', 'talk'],
        ['B', '一封信。我把它藏在舞台底下，却再也没寄出去。', 'sad', 'sad'],
        ['A', '那我去找出来。我答应你。', 'proud', 'proud', 'toward:B'],
      ],
      end: [
        ['B', '谢谢你。现在，我终于可以走了。', 'tender', 'bow', 'exit'],
        ['A', '再见……好好安息。', 'sad', 'wave'],
      ],
    },
  },
  quarrel: {
    en: {
      names: ['Marcus', 'Lena'],
      body: [
        ['A', '{B}, we need to talk. Right now.', 'angry', 'point', 'toward:B'],
        ['B', 'Oh? Now you want to talk?', 'contemplative', 'shrug'],
        ['A', 'You promised! You promised, and you broke it!', 'angry', 'angry', 'stay', 0.85],
        ['B', 'I had no choice! You never listen to me!', 'angry', 'point', 'toward:A', 0.85],
        ['A', 'Listen? I have done nothing but listen!', 'angry', 'angry', 'stay', 0.95],
        ['B', 'Then why am I shouting at an empty room?', 'sad', 'shrug', 'away:A'],
        ['A', '…Maybe we are both too proud.', 'proud', 'proud'],
      ],
      end: [
        ['B', 'I am sorry, {A}. Truly.', 'tender', 'bow', 'toward:A'],
        ['A', 'Me too. Come here.', 'tender', 'hug', 'toward:B'],
      ],
    },
    zh: {
      names: ['老马', '阿莲'],
      body: [
        ['A', '{B}，我们得谈谈。现在就谈！', 'angry', 'point', 'toward:B'],
        ['B', '哦？你现在想谈了？', 'contemplative', 'shrug'],
        ['A', '你答应过我的！你答应了，却又食言！', 'angry', 'angry', 'stay', 0.85],
        ['B', '我没有选择！你从来都不听我说！', 'angry', 'point', 'toward:A', 0.85],
        ['A', '不听？我除了听还做过什么！', 'angry', 'angry', 'stay', 0.95],
        ['B', '那我为什么总是对着空房间吼叫？', 'sad', 'shrug', 'away:A'],
        ['A', '……也许，我们都太骄傲了。', 'proud', 'proud'],
      ],
      end: [
        ['B', '对不起，{A}。真的。', 'tender', 'bow', 'toward:A'],
        ['A', '我也是。过来。', 'tender', 'hug', 'toward:B'],
      ],
    },
  },
  detective: {
    en: {
      names: ['Detective', 'Thief'],
      body: [
        ['A', 'Good evening. Don\'t move.', 'neutral', 'point', 'toward:B'],
        ['B', 'Detective! What a pleasant surprise.', 'happy', 'bow', 'away:A'],
        ['A', 'The jewels vanished at midnight. You were the only one in the room.', 'contemplative', 'think'],
        ['B', 'Me? I was admiring the paintings!', 'happy', 'shrug'],
        ['A', 'Then why is there a ruby in your left pocket?!', 'angry', 'point', 'toward:B', 0.9],
        ['B', 'A… souvenir. A very shiny souvenir.', 'afraid', 'gasp', 'away:A'],
      ],
      end: [
        ['A', 'The game is over. Hand it over.', 'proud', 'proud'],
        ['B', 'You win this time. But I will be back!', 'happy', 'bow', 'exit'],
      ],
    },
    zh: {
      names: ['侦探', '小偷'],
      body: [
        ['A', '晚上好。别动。', 'neutral', 'point', 'toward:B'],
        ['B', '侦探大人！真是意外的惊喜。', 'happy', 'bow', 'away:A'],
        ['A', '午夜时宝石不见了。房间里只有你一个人。', 'contemplative', 'think'],
        ['B', '我？我只是在欣赏墙上的画！', 'happy', 'shrug'],
        ['A', '那你左边口袋里为什么有一颗红宝石？！', 'angry', 'point', 'toward:B', 0.9],
        ['B', '这……是纪念品。一件很闪亮的纪念品。', 'afraid', 'gasp', 'away:A'],
      ],
      end: [
        ['A', '游戏结束了。交出来。', 'proud', 'proud'],
        ['B', '这次算你赢。但我还会回来的！', 'happy', 'bow', 'exit'],
      ],
    },
  },
  love: {
    en: {
      names: ['Romeo', 'Julia'],
      body: [
        ['A', '{B}… I have waited all evening to say something.', 'tender', 'talk', 'toward:B'],
        ['B', 'Then say it. The stage is yours.', 'happy', 'talk'],
        ['A', 'Every time you laugh, the lights seem to grow warmer.', 'tender', 'proud'],
        ['B', 'You are a terrible poet, and I adore it.', 'happy', 'laugh'],
        ['A', 'Will you stay? Not just tonight — every night?', 'contemplative', 'kneel'],
      ],
      end: [
        ['B', 'Yes. A thousand times, yes.', 'happy', 'hug', 'toward:A'],
        ['A', 'Then let the curtain fall on a happy ending!', 'happy', 'bow'],
      ],
    },
    zh: {
      names: ['阿明', '小雪'],
      body: [
        ['A', '{B}……我等了一整晚，就想对你说一句话。', 'tender', 'talk', 'toward:B'],
        ['B', '那就说吧。舞台是你的。', 'happy', 'talk'],
        ['A', '每次你笑，舞台的灯光都好像更暖了。', 'tender', 'proud'],
        ['B', '你真是个糟糕的诗人，可我喜欢。', 'happy', 'laugh'],
        ['A', '你愿意留下来吗？不只是今晚，是每一个夜晚。', 'contemplative', 'kneel'],
      ],
      end: [
        ['B', '愿意。一千次都愿意。', 'happy', 'hug', 'toward:A'],
        ['A', '那就让大幕在幸福的结局中落下吧！', 'happy', 'bow'],
      ],
    },
  },
  comedy: {
    en: {
      names: ['Pip', 'Dot'],
      body: [
        ['A', '{B}! There you are! I have been looking everywhere!', 'happy', 'wave', 'toward:B'],
        ['B', 'Everywhere? I have been standing right here for an hour.', 'contemplative', 'shrug'],
        ['A', 'Impossible! I checked here twice. You were not here!', 'gasp', 'point', 'stay', 0.8],
        ['B', 'Then we have a mystery on our hands.', 'proud', 'think'],
        ['A', 'Or the audience moved the furniture again.', 'contemplative', 'think'],
        ['B', 'Ha! Whatever it is, I vote we blame the audience.', 'happy', 'laugh'],
      ],
      end: [
        ['A', 'Agreed! Ladies and gentlemen — it was all your fault!', 'happy', 'point', 'stay', 0.7],
        ['B', 'Thank you, goodnight!', 'happy', 'bow'],
      ],
    },
    zh: {
      names: ['小皮', '点点'],
      body: [
        ['A', '{B}！原来你在这儿！我找你找遍了！', 'happy', 'wave', 'toward:B'],
        ['B', '找遍了？我在这里站了一个小时呀。', 'contemplative', 'shrug'],
        ['A', '不可能！我来这儿看过两次，你根本不在！', 'gasp', 'point', 'stay', 0.8],
        ['B', '那我们遇到了一桩悬案。', 'proud', 'think'],
        ['A', '或者是观众又把家具挪了位置。', 'contemplative', 'think'],
        ['B', '哈！不管怎样，我投票怪观众。', 'happy', 'laugh'],
      ],
      end: [
        ['A', '同意！各位观众——都是你们的错！', 'happy', 'point', 'stay', 0.7],
        ['B', '谢谢大家，晚安！', 'happy', 'bow'],
      ],
    },
  },
};

// Alternative endings, used by the "change ending" directive. Work for any two characters.
export const ALT_ENDINGS = {
  en: [
    (a, b) => [
      [a, 'Wait. I have been wrong about everything.', 'sad', 'sad', 'toward:' + b],
      [b, 'So have I. Let us start again.', 'tender', 'hug', 'toward:' + a],
      [a, 'Together, then.', 'happy', 'bow'],
    ],
    (a, b) => [
      [b, 'No. I am done. Do not follow me.', 'angry', 'angry', 'exit', 0.9],
      [a, 'And so I am left alone with the empty seats…', 'sad', 'sad', 'center'],
      [a, 'Perhaps the audience will remember me.', 'contemplative', 'bow'],
    ],
    (a, b) => [
      [a, 'Hold on — what is that sound?', 'gasp', 'gasp'],
      [b, 'The audience! They are applauding! This was all a play!', 'happy', 'laugh'],
      [a, 'Then let us take our bow!', 'proud', 'bow'],
    ],
  ],
  zh: [
    (a, b) => [
      [a, '等等。我一直都错了。', 'sad', 'sad', 'toward:' + b],
      [b, '我也是。我们重新开始吧。', 'tender', 'hug', 'toward:' + a],
      [a, '那就一起吧。', 'happy', 'bow'],
    ],
    (a, b) => [
      [b, '不。我受够了。不要跟来。', 'angry', 'angry', 'exit', 0.9],
      [a, '于是，只剩我一个人面对空荡荡的座位……', 'sad', 'sad', 'center'],
      [a, '也许，观众会记得我。', 'contemplative', 'bow'],
    ],
    (a, b) => [
      [a, '等一下——那是什么声音？', 'gasp', 'gasp'],
      [b, '是观众！他们在鼓掌！原来这一切只是一出戏！', 'happy', 'laugh'],
      [a, '那我们就谢幕吧！', 'proud', 'bow'],
    ],
  ],
};
