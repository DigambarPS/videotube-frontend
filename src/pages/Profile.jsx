import React, { useState } from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Avatar from '../components/ui/Avatar'
import { useAuth } from '../context/authContext'

const Profile = () => {
  const {user} = useAuth();
  const [fullName, setFullName] = useState(user?.fullName || "")
  const [email, setEmail] = useState('')
  const [avatarFile, setAvatarFile] = useState(null)
  const [coverImageFile, setCoverImageFile] = useState(null)
  

  function updateDetails(e) {
    e.preventDefault()
    // Add API logic for profile details
  }

  function updateAvatar(e) {
    e.preventDefault()
    // Add API logic for avatar upload
  }

  function updateCoverImage(e) {
    e.preventDefault()
    // Add API logic for cover image upload
  }

  return (
    <div className="max-w-12xl mx-auto p-4 sm:p-6 flex flex-col gap-8 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-200">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-2xl font-bold">Profile Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage your personal information and media</p>
      </div>

      {/* Personal Info Section */}
      <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">Personal Information</h2>
        <form onSubmit={updateDetails} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className="w-full sm:w-1/4 font-medium text-slate-700 dark:text-slate-300">Full Name</label>
            <Input 
              placeholder="Enter Full Name" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full sm:w-3/4 bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className="w-full sm:w-1/4 font-medium text-slate-700 dark:text-slate-300">Email Address</label>
            <Input 
              type="email"
              placeholder="Enter Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-3/4 bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end mt-2">
            <Button 
              val="Save Details" 
              extra_class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 transition-colors font-medium" 
              func={updateDetails}
            />
          </div>
        </form>
      </section>

      {/* Avatar Section */}
      <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">Avatar</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Avatar size="w-28 h-28" />
          <div className="flex flex-col gap-3 w-full">
            <label className="font-medium text-slate-700 dark:text-slate-300">Upload New Avatar</label>
            <Input 
              type="file" 
              accept="image/*"
              onChange={(e) => setAvatarFile(e.target.files[0])}
              className="w-full bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 dark:file:bg-slate-800 file:text-blue-600 dark:file:text-blue-400 hover:file:bg-blue-100 dark:hover:file:bg-slate-700 cursor-pointer"
            />
            <div className="flex justify-end mt-2">
              <Button 
                val="Update Avatar" 
                extra_class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 transition-colors font-medium" 
                func={updateAvatar}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image Section */}
      <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">Cover Image</h2>
        <div className="flex flex-col gap-4">
          <div className="w-full h-32 bg-slate-100 dark:bg-slate-900 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400">
            {coverImageFile ? coverImageFile.name : 'Banner Preview Area'}
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium text-slate-700 dark:text-slate-300">Upload Cover Image</label>
            <Input 
              type="file" 
              accept="image/*"
              onChange={(e) => setCoverImageFile(e.target.files[0])}
              className="w-full bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 dark:file:bg-slate-800 file:text-blue-600 dark:file:text-blue-400 hover:file:bg-blue-100 dark:hover:file:bg-slate-700 cursor-pointer"
            />
            <div className="flex justify-end mt-2">
              <Button 
                val="Update Banner" 
                extra_class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 transition-colors font-medium" 
                func={updateCoverImage}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Profile