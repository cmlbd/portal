$body = @"
[
  {
    "id": "CML-DIR-001",
    "password": "director123",
    "role": "director",
    "name": "Director General",
    "email": "director@cml.org",
    "phone": "+8801700000001"
  },
  {
    "id": "CML-ADM-001",
    "password": "admin123",
    "role": "admin",
    "name": "Executive Administrator",
    "email": "admin@cml.org",
    "phone": "+8801700000002"
  },
  {
    "id": "CML-ADV-001",
    "password": "advisor123",
    "role": "advisor",
    "name": "Media Advisor",
    "email": "advisor@cml.org",
    "phone": "+8801700000003"
  },
  {
    "id": "CML-MBR-001",
    "password": "member123",
    "role": "member",
    "name": "General Member",
    "email": "member@cml.org",
    "phone": "+8801700000004"
  }
]
"@

$headers = @{ "Content-Type" = "application/json" }
$res = Invoke-WebRequest -Uri "https://jsonblob.com/api/jsonBlob" -Method Post -Headers $headers -Body $body
$location = $res.Headers['Location']
Write-Host "BLOB_URL:$location"
