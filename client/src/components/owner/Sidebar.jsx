import React, { useState, useEffect } from 'react'
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
import { useLocation, NavLink } from 'react-router-dom'

const Sidebar = () => {

  const user = dummyUserData
  const location = useLocation()
  const [image, setImage] = useState(null)

  const updateImage = () => {
    user.image = URL.createObjectURL(image)
    setImage(null)
  }

  // cleanup object URL
  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image)
    }
  }, [image])

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-8
                    w-full md:max-w-60 border-r border-borderColor text-sm">

      {/* Profile image */}
      <div className="group relative">
        <label htmlFor="image" className="cursor-pointer">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ??
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"
            }
            alt="profile"
            className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto object-cover"
          />

          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />

          <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
            <img src={assets.edit_icon} alt="edit" className="w-3 h-3" />
          </div>
        </label>
      </div>

      {/* Save button */}
      {image && (
        <button
          onClick={updateImage}
          className="absolute top-4 right-4 flex items-center gap-1
                     px-3 py-1 bg-primary/10 text-primary rounded-md text-xs"
        >
          Save
          <img src={assets.check_icon} width={13} alt="save" />
        </button>
      )}

      <p className="mt-2 text-base max-md:hidden">{user?.name}</p>

      {/* Menu */}
      <div className="w-full mt-6">
        {ownerMenuLinks.map((link, index) => {
          const isActive = link.path === location.pathname

          return (
            <NavLink
              key={index}
              to={link.path}
              className={`relative flex items-center gap-2 w-full py-3 pl-4
                ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}
            >
              <img
                src={isActive ? link.coloredIcon : link.icon}
                alt={link.name}
              />

              <span className="max-md:hidden">{link.name}</span>

              {isActive && (
                <div className="absolute right-0 w-1.5 h-8 bg-primary rounded-l"></div>
              )}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
