"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Dummy lab results
const labResults = [
  {
    id: 1,
    patient: "John Doe",
    test: "Complete Blood Count",
    date: "2025-09-15",
    status: "Normal",
  },
  {
    id: 2,
    patient: "Jane Smith",
    test: "Liver Function Test",
    date: "2025-09-14",
    status: "Abnormal",
  },
  {
    id: 3,
    patient: "David Johnson",
    test: "Blood Glucose",
    date: "2025-09-12",
    status: "Pending",
  },
];

export default function LabResultsPage() {
  return (
    <div className="flex flex-col w-full gap-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Lab Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Test</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {labResults.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>{result.patient}</TableCell>
                  <TableCell>{result.test}</TableCell>
                  <TableCell>{result.date}</TableCell>
                  <TableCell>
                    {result.status === "Normal" && (
                      <Badge className="bg-green-500 text-white">{result.status}</Badge>
                    )}
                    {result.status === "Abnormal" && (
                      <Badge className="bg-red-500 text-white">{result.status}</Badge>
                    )}
                    {result.status === "Pending" && (
                      <Badge className="bg-yellow-500 text-black">{result.status}</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
