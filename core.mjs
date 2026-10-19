export const moods = [
  {name:'Heavy',face:'︵',css:'heavy-face',heading:'You don’t have to carry it all at once.',body:'Thank you for noticing how you feel. You can put one thought into words, take a quiet pause, or reach out to someone you trust.'},
  {name:'Low',face:'⌢',css:'low-face',heading:'There’s room for the low days, too.',body:'You don’t need to make today feel different straight away. What would a little kindness toward yourself look like right now?'},
  {name:'Okay',face:'—',css:'okay-face',heading:'Okay is a perfectly good place to be.',body:'You can take a moment to notice what’s working, or what’s quietly asking for your attention. There’s no need to force an answer.'},
  {name:'Good',face:'⌣',css:'good-face',heading:'Let’s make a little room for the good.',body:'What has been feeling good today? A small moment is worth noticing. You could write it down to come back to later.'},
  {name:'Bright',face:'◡',css:'bright-face',heading:'A bright moment. Let it have its space.',body:'It’s lovely to notice a lighter day. What’s one thing you’d like to remember about how you feel right now?'}
];
export const journalPrompts = ['What’s taking up space in your mind today?','What do you need a little more of right now?','What’s one small thing you’re glad you noticed?','If today were weather, what would it look like?','What would you say to a friend feeling this way?','What can wait until tomorrow?'];
export function reflect(input,turn=0){
  const s=String(input).toLowerCase().replace(/[’‘]/g,"'");
  // A limited demo check, not a clinical assessment or monitored safety system.
  if(/\b(suicid\w*|kill myself|end my life|want to die|wish i (?:was|were) dead|hurt myself|self[- ]?harm|not want to live|don't want to live|overdos\w*|in immediate danger)\b/.test(s)){
    return {safety:true,text:'I’m sorry things feel this painful. This demo can’t offer emergency support, and no one is monitoring this conversation. If you might act on these feelings or are in immediate danger, contact your local emergency service now, or ask someone nearby to stay with you. If you can, reach out to a trusted person or a qualified mental health professional and tell them plainly that you need help staying safe.'};
  }
  if(/\b(exam\w*|stud\w*|college|assignment\w*|grade\w*|academic|deadline\w*)\b/.test(s)) return {text:'It sounds like there’s a lot of pressure around what you need to do. You don’t have to untangle it all in one moment. Which part feels most difficult right now: the amount to do, the expectations, or getting started?'};
  if(/\b(lonely|alone|isolat\w*|no friends|nobody|no one)\b/.test(s)) return {text:'Feeling disconnected can be hard to put into words. You deserve care and connection with real people, too. Is there someone you would feel comfortable sending a small message to, even just “How’s your day going?”'};
  if(/\b(anxious|anxiety|panic|overwhelm\w*|stress\w*|worried|worry|nervous)\b/.test(s)) return {text:'That sounds like a lot to hold in your mind. We can pause here for a moment. Would you rather name the thought that keeps coming back, or try the breathing space below? You get to choose the pace.'};
  if(/\b(tired|exhaust\w*|burn\w*|sleep\w*|drain\w*)\b/.test(s)) return {text:'You sound worn out. It’s okay to acknowledge that without needing to be productive about it. What’s one thing you could make a little easier on yourself today?'};
  if(/\b(happy|excited|grateful|good|great|proud|bright|better)\b/.test(s)) return {text:'That sounds like a moment worth giving a little space to. What made it feel good? If you want, you could save a few words about it in your journal.'};
  if(/\b(sad|low|cry\w*|upset|hurt|breakup|heartbreak|miss\w*)\b/.test(s)) return {text:'Thank you for putting that into words. You don’t have to make the feeling go away to talk about it. Is there a particular moment that has been staying with you?'};
  if(/\b(angry|anger|frustrat\w*|annoy\w*)\b/.test(s)) return {text:'Something seems to have really frustrated you. You can describe what happened without needing to tidy it up first. What do you wish the other person, or the situation, had made room for?'};
  if(/\b(thank\w*)\b/.test(s)) return {text:'You’re welcome. You can stay with this thought, write something down, or leave it here for today. What would feel kind to you?'};
  if(/^(hi|hello|hey|hi friend|hey friend)[!. ]*$/.test(s)) return {text:'Hi. You can start small here. What’s one word you’d use to describe your day so far?'};
  const responses=['Thank you for sharing that. What part of it feels most present for you right now?','There’s no need to find the perfect way to explain it. If you could give that feeling a name, what might it be?','What do you feel you need right now: a little room to express it, a quiet pause, or a small next step?','If someone you care about shared this with you, what kind thing would you want them to hear?'];
  return {text:responses[turn%responses.length]};
}
export function cleanEntries(value){
  if(!Array.isArray(value))return [];
  return value.filter(e=>e&&typeof e.id==='string'&&typeof e.text==='string'&&e.text.trim()&&typeof e.date==='string'&&Number.isFinite(Date.parse(e.date))).slice(-20).map(e=>({id:e.id.slice(0,100),text:e.text.slice(0,6000),date:e.date,persisted:true}));
}
