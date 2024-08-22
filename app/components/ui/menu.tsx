import { SideButton, PrimaryButton } from "@/app/components/ui/buttons";
import Image from "next/image";

const Menu = () => {
    return (
        <nav className={"h-screen fixed w-fit px-8"}>
            <div className={"px-4 pt-2 pb-6"}>
                <Image
                    src={"svg/fill/TwitterSvgFill.svg"}
                    alt={"Twitter Logo"}
                    width={30}
                    height={30}
                />
            </div>
            <SideButton text={"Home"}>
                <Image 
                    src={"svg/fill/HomeSvgFill.svg"} 
                    alt={"Home"}
                    width={30}
                    height={30}
                />
            </SideButton>
            <SideButton text={"Explore"}>
                <Image 
                    src={"svg/outline/ExploreSvgOutline.svg"} 
                    alt={"Explore"}
                    width={30}
                    height={30}
                />
            </SideButton>
            <SideButton text={"Notifications"}>
                <Image 
                    src={"svg/outline/NotificationsSvgOutline.svg"} 
                    alt={"Notifications"}
                    width={30}
                    height={30}
                />
            </SideButton>
            <SideButton text={"Messages"}>
                <Image 
                    src={"svg/outline/MessagesSvgOutline.svg"} 
                    alt={"Messages"}
                    width={30}
                    height={30}
                />
            </SideButton>
            <SideButton text={"Bookmarks"}>
                <Image 
                    src={"svg/outline/BookmarksSvgOutline.svg"} 
                    alt={"Bookmarks"}
                    width={30}
                    height={30}
                />
            </SideButton>
            <SideButton text={"Lists"}>
                <Image 
                    src={"svg/outline/ListsSvgOutline.svg"} 
                    alt={"Lists"}
                    width={30}
                    height={30}
                />
            </SideButton>
            <SideButton text={"Profile"}>
                <Image 
                    src={"svg/outline/ProfileSvgOutline.svg"} 
                    alt={"Profile"}
                    width={30}
                    height={30}
                />
            </SideButton>
            <SideButton text={"More"}>
                <Image 
                    src={"svg/outline/CircleMoreSvgOutline.svg"} 
                    alt={"More"}
                    width={30}
                    height={30}
                />
            </SideButton>
            <PrimaryButton 
                text={"Tweet"}
                className={"mt-4"}
            />
        </nav>
    )
}

export default Menu
