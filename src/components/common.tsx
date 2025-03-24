export const Skill: React.FC<{ key: number; skill: string }> = ({
  key,
  skill,
}) => {
  return (
    <span
      key={key}
      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
    >
      {skill}
    </span>
  );
};
