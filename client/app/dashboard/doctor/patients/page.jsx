"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Dummy patients
const patients = [
  {
    id: 1,
    name: "John Doe",
    age: 34,
    gender: "Male",
    phone: "+251 911 123 456",
    condition: "Hypertension",
    lastVisit: "2025-09-10",
    medications: ["Amlodipine", "Lisinopril"],
    allergies: ["Penicillin"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    gender: "Female",
    phone: "+251 922 654 321",
    condition: "Type 2 Diabetes",
    lastVisit: "2025-09-15",
    medications: ["Metformin", "Insulin"],
    allergies: [],
  },
];

export default function PatientsPage() {
  const [query, setQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSearch = () => {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) {
      setSelectedPatient(null);
      return;
    }
    const found = patients.find((p) =>
      p.name.toLowerCase().includes(trimmedQuery)
    );
    setSelectedPatient(found || null);
  };

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Search Card */}
      <Card className="shadow-xl border border-white/10 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 backdrop-blur-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold text-gray-800 bg-clip-text ">
            🔍 Patient Search
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Input
            placeholder="Search patient by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 bg-white/30 backdrop-blur-sm placeholder:text-gray-500"
          />
          <Button
            onClick={handleSearch}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6"
          >
            Search
          </Button>
        </CardContent>
      </Card>

      {/* Patient Details */}
      {selectedPatient && (
        <Card className="shadow-2xl border border-white/10 bg-gradient-to-tr from-white/20 to-indigo-50/10 dark:from-gray-900/20 dark:to-indigo-900/20 backdrop-blur-xl rounded-2xl transition-transform hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
              {selectedPatient.name}'s Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex flex-col gap-2 text-gray-800 dark:text-gray-200">
                <p><span className="font-semibold">Age:</span> {selectedPatient.age}</p>
                <p><span className="font-semibold">Gender:</span> {selectedPatient.gender}</p>
                <p><span className="font-semibold">Phone:</span> {selectedPatient.phone}</p>
              </div>
              <div className="flex flex-col gap-2 text-gray-800 dark:text-gray-200">
                <p><span className="font-semibold">Condition:</span> {selectedPatient.condition}</p>
                <p><span className="font-semibold">Last Visit:</span> {selectedPatient.lastVisit}</p>
              </div>
            </div>

            <Separator />

            {/* Medications */}
            <div>
              <p className="font-semibold mb-2 text-indigo-700 dark:text-indigo-300">Medications</p>
              <div className="flex gap-2 flex-wrap">
                {selectedPatient.medications.length > 0 ? (
                  selectedPatient.medications.map((med, idx) => (
                    <Badge key={idx} className="bg-indigo-500 text-white shadow-md">
                      {med}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No medications</p>
                )}
              </div>
            </div>

            {/* Allergies */}
            <div>
              <p className="font-semibold mb-2 text-red-600 dark:text-red-400">Allergies</p>
              <div className="flex gap-2 flex-wrap">
                {selectedPatient.allergies.length > 0 ? (
                  selectedPatient.allergies.map((allergy, idx) => (
                    <Badge key={idx} className="bg-red-500 text-white shadow-md">
                      {allergy}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No known allergies</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* No Patient Found */}
      {query && !selectedPatient && (
        <p className="text-center text-gray-500 italic">No patient found.</p>
      )}
    </div>
  );
}
