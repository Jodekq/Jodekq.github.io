const Age = () => {
  const today = new Date();
  const birthDate = new Date("12/13/2005");
  var age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

    return (
        <div>
            <p className="text-emerald-50 px-5">
                I&apos;m a {age}-year-old self-taught programmer and computer science student from Germany. Motivated by passion and personal projects, I love discovering new tech, experimenting with code, and continuously learning.
            </p>
        </div>
    );
};

export default Age;
