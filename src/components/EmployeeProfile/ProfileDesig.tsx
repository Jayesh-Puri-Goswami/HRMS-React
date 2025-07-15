
interface ProfileDetailProps {
    icon: React.ElementType;
    label: string;
    value: string;
  }
  
  const ProfileDetail: React.FC<ProfileDetailProps> = ({
    icon: Icon,
    label,
    value,
  }) => (
    <div className="flex items-start gap-2 w-full">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 dark:bg-gray-800">
        <Icon className="h-4 w-4 text-gray-800 dark:text-white" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
        <div className="text-base font-medium text-gray-900 dark:text-white">
          {value}
        </div>
      </div>
    </div>
  );

  export default ProfileDetail;
  