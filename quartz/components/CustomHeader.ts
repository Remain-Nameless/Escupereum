import { QuartzComponentConstructor} from "./types"
export default (() => {
  function CustomHeader() {
    return (
	        {/* Mobile navigation */}
        <div className="topnav" id="myTopnav">
          <div id="myLinks">
            <a href="https://remain-nameless.github.io/Escupereum/">О проекте</a>
            <a href="https://remain-nameless.github.io/Escupereum/Эскуперей">Вселенная</a>
          </div>

          <a href="javascript:void(0);" className="icon" id="icon">
            <div className="mobilemenu"></div>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="navbar">
            <a href="https://remain-nameless.github.io/Escupereum/">О проекте</a>
            <a href="https://remain-nameless.github.io/Escupereum/Эскуперей">Вселенная</a>
        </nav>
      </>
    )
  }
CustomHeader.afterDOMLoaded = `
function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("icon");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  document.getElementById("myTopnav").classList.toggle("responsive");
}

document.getElementById("icon")?.addEventListener("click", myFunction)
window.addCleanup(() => {
  document.getElementById("icon")?.removeEventListener("click", myFunction)
})
`
  return CustomHeader
}) satisfies QuartzComponentConstructor