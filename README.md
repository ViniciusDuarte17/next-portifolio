# next-portifolio


const [avatar, setAvatar] = useState<boolean>(false);
  const mediaQuery = "(max-width: 660px)";
  
  const handleMediaChange = (e: MediaQueryListEvent) => {
    setAvatar(e.matches);
  };
  
  useEffect(() => {
    const evertPositionAvatar = window.matchMedia(mediaQuery);
    setAvatar(evertPositionAvatar.matches);
    evertPositionAvatar.addEventListener("change", handleMediaChange);
  
    return () => evertPositionAvatar.removeEventListener("change", handleMediaChange);
  }, []);
  
  console.log(avatar);