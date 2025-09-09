"use client";
import { useState } from "react";
import Header from "../(components)/Header";
type UserSettings = {
  label: string;
  value: string | boolean;
  type: "text" | "toggle";
};

const mockSettings: UserSettings[] = [
  { label: "Username", value: "john_doe", type: "text" },
  { label: "Email", value: "john.doe@example.com", type: "text" },
  { label: "notification", value: true, type: "toggle" },
  { label: "Dark Mode", value: false, type: "toggle" },
  { label: "Language", value: "English", type: "text" },
];

const Settings = () => {
  const [userSettings, setUserSettings] =
    useState<UserSettings[]>(mockSettings);

  const handleToggleChange = (index: number) => {
    const updatedSettings = [...userSettings];
    const currentValue = updatedSettings[index].value as boolean;
    updatedSettings[index].value = !currentValue;
    setUserSettings(updatedSettings);
  };

  return (
    <div className="w-full">
      <Header name="User Settings" />

      <div className="overflow-x-auto mt-5 shadow-md">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4  uppercase font-semibold text-sm">
                Setting
              </th>
              <th className="text-left py-3 px-4  uppercase font-semibold text-sm">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {userSettings.map((setting, index) => (
              <tr key={setting.label} className="hover:bg-blue-50">
                <td className="py-2 px-4">{setting.label}</td>
                <td className="py-2 px-4">
                  {setting.type === "toggle" ? (
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={setting.value as boolean}
                        onChange={() => handleToggleChange(index)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  ) : (
                    <input
                      type="text"
                      checked={setting.value as boolean}
                      className="px-4 py-2 border rounded-lg text-gray-500 focus-outline-none focus:border-blue-200"
                      value={setting.value as string}
                      onChange={(e) => {
                        const updatedSettings = [...userSettings];
                        updatedSettings[index].value = e.target.value;
                        setUserSettings(updatedSettings);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;
