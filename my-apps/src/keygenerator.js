function keygenerator() {
  const letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',
                   'z','x','c','v','b','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S',
                   'D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

  function RND() {
    return Math.floor(Math.random() * 10);
  }

  function RNDL() {
    return letters[Math.floor(Math.random() * letters.length)];
  }

  return RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()
         +RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()
         +RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()
         +RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()
         +RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL()+RND()+RNDL();
}

export default keygenerator;
