import { h } from "preact";

const UserProfile = ({user_profile, edit, handlerClick}) => (
  <div class="mx-auto">
    {user_profile && (
      <div class="flex flex-col sm:flex-row mt-10 mb-10">
        <div class="text-center">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
              {user_profile.nama}
            </h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base text-gray-600">
              Kelas {user_profile.kelas}, Umur {user_profile.umur} Tahun, Nomor induk {user_profile.nik}
            </p>
            { edit && (
            <p class="text-base text-gray-600">
            <a href="#" class="mt-0 text-blue-500 inline-flex items-center" onClick={handlerClick}>Edit</a>
            </p>)}
          </div>
        </div>
      </div>
    )}
  </div>
);

export default UserProfile;
