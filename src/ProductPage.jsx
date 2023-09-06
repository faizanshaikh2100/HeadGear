import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
function ProductPage() {
  const card = {
    id: "1693884756-286",
    "web-scraper-start-url":
      "https://www.flipkart.com/search?q=wired+headphones&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.headphone_type%255B%255D%3DOn%2Bthe%2BEar&page=13",
    item: "Nitho NX200 STEREO GAMING HEADSET Wired Headset",
    "item-href":
      "https://www.flipkart.com/nitho-nx200-stereo-gaming-headset-wired/p/itm894abc6953a3a?pid=ACCGRMDKF9MZZSFA&lid=LSTACCGRMDKF9MZZSFAJSO4BX&marketplace=FLIPKART&q=wired+headphones&store=0pm%2Ffcn&srno=s_13_515&otracker=search&otracker1=search&fm=organic&iid=32662a7f-cf8e-4c99-a22b-a6dc19328d01.ACCGRMDKF9MZZSFA.SEARCH&ppt=pp&ppn=pp&ssid=xw903pe03k0000001693884736050&qH=fae9a029a61f58ad",
    title:
      "Nitho NX200 STEREO GAMING HEADSET Wired Headset(Black, Blue, On the Ear)",
    rating: "",
    ratingsCount: "",
    reviewsCount: "",
    price: "2,099",
    mrp: "2,299",
    highlights:
      '<div class="_3a9CI2">Highlights</div><div class="_2418kt"><ul><li class="_21Ahn-">With Mic:Yes</li><li class="_21Ahn-">Connector type: 3.5mm</li></ul></div>',
    sellerName: "TRUMPCARD",
    sellerRating: 4.9,
    modelName: "NX200 STEREO GAMING HEADSET",
    color: "Black, Blue",
    headphoneType: "On the Ear",
    InlineRemote: "Yes",
    salesPackage: "1 headset/1 pc adapter/1 manual",
    connectivity: "Wired",
    headphone_design: "Over the Head",
    accessoriesIncluded: "",
    compatibleDevices: "Laptop, Desktop, Audio Player, Gaming Console",
    foldable: "",
    deepBass: "Yes",
    designedFor: "",
    connectorSize: "",
    controls: "",
    otherFeatures: "",
    withMicrophone: "Yes",
    domesticWarranty: "",
    warrantySummary: "7 days return & replacement warranty",
    coverdInWarranty: "Physical Damage",
    notCoveredInWarranty: "Physical Damage",
    imageurls: [
      "https://rukminim2.flixcart.com/image/2000/2000/xif0q/headphone/q/w/0/nx200-stereo-gaming-headset-nitho-original-imagrmdj7bsdu59f.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/2000/2000/xif0q/headphone/b/t/p/nx200-stereo-gaming-headset-nitho-original-imagrmdjvmbcxpsh.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/2000/2000/xif0q/headphone/b/x/4/nx200-stereo-gaming-headset-nitho-original-imagrmdjed5zvbfc.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/2000/2000/xif0q/headphone/b/i/s/nx200-stereo-gaming-headset-nitho-original-imagrmdjpzz9pkpc.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/2000/2000/xif0q/headphone/l/7/v/nx200-stereo-gaming-headset-nitho-original-imagrmdj5hseekfv.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/2000/2000/xif0q/headphone/e/n/o/nx200-stereo-gaming-headset-nitho-original-imagrmdjpynuk5d9.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/2000/2000/xif0q/headphone/u/f/y/nx200-stereo-gaming-headset-nitho-original-imagrmdjcv8jfpuu.jpeg?q=70",
    ],
  };

  const [activeImage, setActiveImage] = useState(card.imageurls[0]);
  return (
    <div className="flex mx-[70px] mt-8 gap-6">
      <div className="flex flex-col gap-2 mt-4 ">
        {card.imageurls.map((item, i) => (
          <div
            key={i}
            className="rounded aspect-square bg-white flex items-center justify-center hover:border border-red-500 shadow-md p-2.5 w-[80px]  hover:shadow-red-500"
          >
            <img
              src={item}
              className="w-full aspect-square rounded-5xl "
              onMouseOver={() => setActiveImage(item)}
            />
          </div>
        ))}
      </div>
      <div className="w-[450px]">
        <div className="rounded-3xl aspect-square shadow-xl bg-white flex items-center justify-center border border-gray-200 p-8">
          <img src={activeImage} className="w-full rounded-3xl max-w-[300px]" />
        </div>

        {/* button div */}
        <br />
        <div className="flex flex-col gap-5 w-[400px] px-auto">
          <button className="bg-red-500 p-2 w-full rounded-lg custom-shadow ">
            Add to Cart
          </button>
          <button className="bg-red-400 p-2 w-full rounded-lg custom-shadow">
            Buy Now
          </button>
        </div>
      </div>
      <div className="mt-6 ml-5 flex flex-col gap-3">
        <h1 className="font-medium text-2xl">{card.title}</h1>
        <div className="flex gap-3">
          <span className="flex items-center bg-red-500 w-fit py-0.5 rounded-md px-1">
            {card.rating == "" ? 3.5 : card.rating}
            <AiFillStar />
          </span>
          <h3 className="text-lg">
            {card.ratingsCount == "" ? "217 ratings" : card.ratingsCount} &{" "}
            {card.reviewsCount == "" ? "48 reviews" : card.reviewsCount}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-4xl">₹{card.price}</h1>
          <h1 className=" text-lg line-through text-gray-600 font-thin">
            ₹{card.mrp}
          </h1>
        </div>

        <div className="flex gap-[60px]">
          <div className="font-semibold text-gray-700">Highlights</div>
          <ul className="">
            <li className="list-disc">With Mic:Yes</li>
            <li className="list-disc">Connector type: 3.5 mm</li>
          </ul>
        </div>
        <div className="flex gap-[80px] items-center">
          <h1 className="font-semibold text-gray-700">Seller</h1>
          <div className="flex gap-2 items-center">
            <h1 className="list-disc text-blue-500 font-bold">
              {card.sellerName}
            </h1>
            <span className="list-disc flex items-center bg-blue-500 w-fit py-0.3 rounded-sm px-1">
              <h1 className="font-semibold text-white">
                {card.sellerRating == "" ? 4 : card.sellerRating}
              </h1>
              <AiFillStar color="white" />
            </span>
          </div>
        </div>
        <div className=" border border-gray-400 pb-[50px]">
          <h1 className="font-semibold text-3xl">Specifications</h1>
        </div>

        <div></div>
      </div>

      {/* <div dangerouslySetInnerHTML={{ __html: card.highlights }}></div> */}
    </div>
  );
}

export default ProductPage;
