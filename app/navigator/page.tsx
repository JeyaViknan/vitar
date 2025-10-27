"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CameraPermissionFlow, type PermissionStatus } from "@/components/camera-permission-flow"

export default function NavigatorPage() {
  const router = useRouter()
  const [permissionsGranted, setPermissionsGranted] = useState(false)
  const [permissions, setPermissions] = useState<PermissionStatus | null>(null)

  const handlePermissionsGranted = (perms: PermissionStatus) => {
    setPermissions(perms)
    setPermissionsGranted(true)
  }

  const handleCancel = () => {
    router.push("/")
  }

  if (!permissionsGranted) {
    return <CameraPermissionFlow onPermissionsGranted={handlePermissionsGranted} onCancel={handleCancel} />
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">AR Navigator</h1>
        <p className="text-gray-400 mb-8">{permissions?.arCapable ? "WebAR mode active" : "3D Map mode active"}</p>
        <div className="bg-gray-800 rounded-lg p-8 max-w-md">
          <p className="text-gray-300 mb-4">Permissions granted:</p>
          <ul className="text-left space-y-2 text-gray-400">
            <li>Camera: {permissions?.camera ? "✓" : "✗"}</li>
            <li>Location: {permissions?.geolocation ? "✓" : "✗"}</li>
            <li>Device Orientation: {permissions?.deviceOrientation ? "✓" : "✗"}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
