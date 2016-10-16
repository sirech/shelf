json.array! @years do |h|
  json.year h.first
  json.count h.last
end
