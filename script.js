(async () => {
  try {
    const res = await fetch(
      "https://foodpro.ucr.edu/foodpro/shortmenu.asp?sName=University%20of%20California%2C%20Riverside%20Dining%20Services&locationNum=03&locationName=Glasgow&naFlag=1"
    );
    console.log(res);
  } catch (e) {}
})();
