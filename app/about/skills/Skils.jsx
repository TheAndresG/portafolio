import Skill from "./Skill";

export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center "></h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <Skill name="WEB" x="0vw" y="0vw" />
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="React" x="0vw" y="12vw" />
        <Skill name="WEB" x="-20vw" y="-15vw" />
        <Skill name="WEB" x="15vw" y="-12vw" />
        <Skill name="WEB" x="32vw" y="-5vw" />
        <Skill name="WEB" x="0vw" y="-20vw" />
        <Skill name="WEB" x="-25vw" y="18vw" />
        <Skill name="WEB" x="18vw" y="18vw" />
      </div>
    </>
  );
}
