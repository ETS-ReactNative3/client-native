export const getScentIcon = (iconName) => {
  switch (iconName) {
    case "bergamot":
      return(require("../../assets/imgs/scent_image/bergamot.png"))
    case "cottonblossom":
      return(require("../../assets/imgs/scent_image/cottonblossom.png"))
    case "eucalyptus":
      return(require("../../assets/imgs/scent_image/eucalyptus.png"))
    case "latulip":
      return(require("../../assets/imgs/scent_image/latulip.png"))
    case "lavender":
      return(require("../../assets/imgs/scent_image/lavender.png"))
    case "lemon":
      return(require("../../assets/imgs/scent_image/lemon.png"))
    case "peppermint":
      return(require("../../assets/imgs/scent_image/peppermint.png"))
    case "sandalwood":
      return(require("../../assets/imgs/scent_image/sandalwood.png"))
    case "ylangylang":
      return(require("../../assets/imgs/scent_image/ylangylang.png"))
    default:
      return (require ("../../assets/imgs/scent_image/lavender.png"))
  }
}