import { PrimaryButton, SideButton } from "@/app/components/ui/buttons";
import Image from "next/image";

const MenuOptions = [
    {
        text: "Home",
        imgPath: "svg/fill/HomeSvgFill.svg",
        imgAlt: "Home",
    },
    {
        text: "Explore",
        imgPath: "svg/outline/ExploreSvgOutline.svg",
        imgAlt: "Explore",
    },
    {
        text: "Notifications",
        imgPath: "svg/outline/NotificationsSvgOutline.svg",
        imgAlt: "Notifications",
    },
    {
        text: "Messages",
        imgPath: "svg/outline/MessagesSvgOutline.svg",
        imgAlt: "Messages",
    },
    {
        text: "Bookmarks",
        imgPath: "svg/outline/BookmarksSvgOutline.svg",
        imgAlt: "Bookmarks",
    },
    {
        text: "Lists",
        imgPath: "svg/outline/ListsSvgOutline.svg",
        imgAlt: "Lists",
    },
    {
        text: "Profile",
        imgPath: "svg/outline/ProfileSvgOutline.svg",
        imgAlt: "Profile",
    },
    {
        text: "More",
        imgPath: "svg/outline/CircleMoreSvgOutline.svg",
        imgAlt: "More",
    },
]

const SubMenu = () => {
    return (
        <div className={"w-full py-4 mb-4 px-4 flex justify-between items-center cursor-pointer select-none rounded-[50px] hover:bg-dark-6 hover:bg-opacity-10"}>
            <div className={"flex gap-2"}>
                <Image src={"https://github.com/Marck-vsv.png"} alt={'Avatar'} width={30} height={30} className={"rounded-full h-10 w-10 my-auto"}/>
                <div>
                    <p className={"text-white"}>Marcos Vinicius</p>
                    <span className={"text-dark-6"}>@marckvsv</span>
                </div>
            </div>
            <Image src={"svg/outline/DotsMoreSvgOutline.svg"} alt={"Dots"} width={30} height={30} className={"w-9 h-9"}/>
        </div>
    )
}

const Menu = () => {
    return (
        <nav className={"h-screen fixed w-fit px-8 flex flex-col justify-between"}>
            <div id="menu-wrapper">
                <div id="logo" className={"px-4 pt-2 pb-6"}>
                    <Image
                        src={"svg/fill/TwitterSvgFill.svg"}
                        alt={"Twitter Logo"}
                        width={30}
                        height={30}
                    />
                </div>

                {MenuOptions.map((option) => (
                    <SideButton key={option.text} text={option.text}>
                        <Image
                            src={option.imgPath} 
                            alt={option.imgAlt}
                            className={""}
                            width={30}
                            height={30}
                        />
                    </SideButton>
                ))}

                <PrimaryButton 
                    text={"Tweet"}
                    className={"mt-4"}
                />
            </div>

            <SubMenu/>
        </nav>
    )
}

export default Menu
