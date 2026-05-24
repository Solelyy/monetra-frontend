type Props = {
  name?: string;
};
export default function Greeting({ name }: Props) {
  return (
    <div>
      <p className="text-2xl font-bold tracking-tight text-foreground">
        Welcome back, <span className="text-primary">{name}</span>
        <span className="text-primary">!</span>
      </p>
    </div>
  );
}
