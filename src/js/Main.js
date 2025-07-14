import Collapsify from "@terrahq/collapsify";
import RevealItem from "./modules/RevealItem";
class Main{
    constructor(){
        this.DOM = {
            revealItems: document.querySelectorAll(".js--reveal-item"),
            playBtn: document.querySelector(".js--play"),
            pauseBtn: document.querySelector(".js--pause"),
        }
        this.instances = []
        this.init();
        this.events()
    }

    
    init() {
        this.instances['collapsify'] = [];
        this.instances['collapsify'][0] = new Collapsify({
            onSlideStart: (isOpen, contentID) => {
                const buttons = document.querySelectorAll(`[data-collapsify-control='${contentID}']`);
                buttons.forEach(button => {
                    const arrow = button.querySelector(".c--accordion-a__item__hd__artwork");
                    if (arrow) {
                        if (isOpen) {
                            arrow.style.transform = "translateY(25px) scale(1.8) rotate(180deg)";
                        } else {
                            arrow.style.transform = "translateY(25px) scale(1.8) rotate(0deg)";
                        }
                    }
                });
            }
        });

        this.instances["RevealInstances"] = [];
        this.DOM.revealItems.forEach((item, index) => {
            this.instances["RevealInstances"][index] = new RevealItem({
                element: item
            });
        });
    }

    events(){
        this.DOM.playBtn.addEventListener("click", () => {
            console.log("Play button clicked");
        });
        this.DOM.pauseBtn.addEventListener("click", () => {
            console.log("Pause button clicked");
        });
    }
}
export default Main;