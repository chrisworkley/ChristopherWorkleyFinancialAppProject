const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h1 className="header-box-title">
            {title}
            {type === "greeting" && (
                <span className="text-bankGradient">
                    &nbsp;{user}
                </span>
            )}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}
type HeaderBoxProps = {
  type: string;
  title: string;
  subtext: string;
  user?: string; // Added the 'user' property
  name?: string; // Added the 'name' property
};
export default HeaderBox
