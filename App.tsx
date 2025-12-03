import React from "react";
import { Plus } from "lucide-react";
import { Button } from "./Components/ui/Button";
import { Input } from "./Components/ui/Input";
import { Select } from "./Components/ui/Select";
import { TextArea } from "./Components/ui/TextArea";
import { CommunicationTable } from "./Components/CommunicationTable";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pageBg pb-12">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-primary/80"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-[24px] font-semibold text-textPrimary tracking-tight">
              Communication Tab
            </h1>
            <p className="text-textMuted text-sm mt-1">
              Manage patient referrals and communication logs.
            </p>
          </div>
          <Button icon={<Plus size={16} />}>New Record</Button>
        </header>

        {/* Main Form Card */}
        <main className="bg-cardBg rounded-[8px] shadow-subtle p-6 md:p-8 border border-gray-100">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {/* Left Column */}
              <div className="flex flex-col gap-5">
                <Input
                  label="Date"
                  type="date"
                  placeholder="Select date"
                  helperText="Use format YYYY-MM-DD"
                />

                <Select
                  label="School Year"
                  options={[
                    { value: "2023-2024", label: "2023-2024" },
                    { value: "2024-2025", label: "2024-2025" },
                    { value: "2025-2026", label: "2025-2026" },
                  ]}
                />

                <Select
                  label="Language"
                  options={[
                    { value: "en", label: "English" },
                    { value: "fil", label: "Filipino" },
                    { value: "ceb", label: "Cebuano" },
                  ]}
                />

                <Input label="Date Called" type="date" />

                <Select
                  label="Referral Type"
                  options={[
                    { value: "TU0", label: "TU0 - Initial" },
                    { value: "TU1", label: "TU1 - Routine" },
                    { value: "TU2", label: "TU2 - Urgent" },
                    { value: "TU3", label: "TU3 - Emergency" },
                  ]}
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-5">
                <Input label="Patient's Name" placeholder="First Last" />

                <Input label="Current Dentist" placeholder="e.g. Dr. Smith" />

                <Input label="Date Emailed" type="date" />

                <Input
                  label="Created By"
                  placeholder="e.g. Kristyle Modin"
                  className="bg-gray-50 text-gray-700"
                />
              </div>
            </div>

            {/* Bottom Full Width */}
            <div className="mt-6 md:mt-8">
              <TextArea
                label="Notes"
                placeholder="Enter detailed notes about the communication..."
              />
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
              <Button type="button" variant="ghost">
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Save Record
              </Button>
            </div>
          </form>
        </main>

        {/* Table Section */}
        <CommunicationTable />
      </div>
    </div>
  );
};

export default App;
