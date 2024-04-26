const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        {/* left form */}
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength={62}
            minLength={10}
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="sell"
                className=" w-4 checked:bg-blue-300"
              />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rent"
                className=" w-4 checked:bg-blue-300"
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className=" w-4 checked:bg-blue-300"
              />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="furnished"
                className=" w-4 checked:bg-blue-300"
              />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="petsAllowed"
                className=" w-4 checked:bg-blue-300"
              />
              <span>Pets</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="offer"
                className=" w-4 checked:bg-blue-300"
              />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min={1}
                max={10}
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <span>Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min={1}
                max={10}
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <span>Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                min={1}
                max={10}
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="discountPrice"
                min={1}
                max={10}
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Discounted Price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col flex-1 gap-1">
          <p className="font-semibold ">
            Images:
            <span className="font-normal text-sm text-gray-400 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="  text-sm text-gray-400 border-y w-full rounded p-3
              file:mr-4 file:py-3 
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-sky-50 file:text-sky-600
              hover:file:bg-sky-100"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button
              className="p-3 text-white bg-sky-400 rounded-lg h-14 my-auto
                    uppercase hover:opacity-90 disabled:opacity-80"
            >
              Upload
            </button>
          </div>
        <button className="p-3 bg-sky-700 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80">
          Create Listing
        </button>
        </div>
      </form>
    </main>
  );
};
export default CreateListing;
